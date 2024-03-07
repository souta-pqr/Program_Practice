import cv2
from pyzbar.pyzbar import decode
import requests

# SlackのWebhook URL
webhook_url = ''

# Webカメラの設定
cap = cv2.VideoCapture(0)

while True:
    # Webカメラから画像を取得
    ret, frame = cap.read()

    # QRコードの読み取り
    decoded_objects = decode(frame)

    # QRコードが読み取れた場合
    if decoded_objects:
        # QRコードのデータが一致するか確認
        name = decoded_objects[0].data.decode()
        if name in ["小堀", "花川", "保科"]:
            # Slackに通知を送る
            requests.post(webhook_url, json={'text': f'{name}さん認証されました！'})

    # 画像を表示
    cv2.imshow('frame', frame)

    # 'q'キーが押されたらループを抜ける
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# キャプチャをリリースしてウィンドウを閉じる
cap.release()
cv2.destroyAllWindows()
