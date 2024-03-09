import face_recognition
import cv2
import requests
import time

# 登録する顔画像の読み込み
known_faces = {
    "sample": face_recognition.face_encodings(face_recognition.load_image_file("sample.jpg"))[0],
    "小堀": face_recognition.face_encodings(face_recognition.load_image_file("小堀.png"))[0]
}

# 最後に認証された時間を記録する辞書
last_auth = {name: 0 for name in known_faces.keys()}

# SlackのWebhook URL
webhook_url = ''

# Webカメラの設定
cap = cv2.VideoCapture(0)

while True:
    # Webカメラから画像を取得
    ret, frame = cap.read()

    # 顔認識の実行
    face_locations = face_recognition.face_locations(frame)
    face_encodings = face_recognition.face_encodings(frame, face_locations)

    for face_encoding in face_encodings:
        # 顔画像が一致するか確認
        for name, known_face_encoding in known_faces.items():
            matches = face_recognition.compare_faces([known_face_encoding], face_encoding, tolerance=0.5)

            if True in matches:
                # 最後に認証されてから1分以上経過しているか確認
                if time.time() - last_auth[name] > 60:
                    # Slackに通知を送る
                    requests.post(webhook_url, json={'text': f'{name}さん、こんにちは！'})
                    # 最後に認証された時間を更新
                    last_auth[name] = time.time()

    # 画像を表示
    cv2.imshow('frame', frame)

    # 'q'キーが押されたらループを抜ける
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# キャプチャをリリースしてウィンドウを閉じる
cap.release()
cv2.destroyAllWindows()
