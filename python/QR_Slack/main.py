import qrcode
import cv2
from pyzbar.pyzbar import decode
import requests
import time

# QRコードに埋め込む情報
names = ["小堀さん", "花川さん", "保科さん", "伊藤さん", "遠藤さん", "久馬さん", "関取さん", "若海さん", "森さん", "櫻井さん", "三谷さん", "大賀さん", "藤江さん"]

for i, name in enumerate(names):
    # QRコードの生成
    qr = qrcode.QRCode(
        version=2,  # QRコードの複雑さを増やす
        error_correction=qrcode.constants.ERROR_CORRECT_M,  # エラー訂正レベルを上げる
        box_size=10,
        border=4,
    )
    qr.add_data(str(i+1))  # 数字を文字列として埋め込む
    qr.make(fit=True)

    # QRコードの描画と保存
    img = qr.make_image(fill='black', back_color='white')
    img.save(f'qrcode_{name}.png')

# SlackのWebhook URL
webhook_url = ''

# Webカメラの設定
cap = cv2.VideoCapture(0)
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)  # カメラの解像度を上げる
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)  # カメラの解像度を上げる

# 最後に認証された時間を記録する辞書
last_auth = {name: 0 for name in names}

while True:
    # Webカメラから画像を取得
    ret, frame = cap.read()

    # QRコードの読み取り
    decoded_objects = decode(frame)

    # QRコードが読み取れた場合
    if decoded_objects:
        # QRコードのデータが一致するか確認
        data = decoded_objects[0].data.decode()
        if data.isdigit():
            index = int(data) - 1
            if 0 <= index < len(names):
                name = names[index]
                # 最後に認証されてから1分以上経過しているか確認
                if time.time() - last_auth[name] > 60:
                    # Slackに通知を送る
                    requests.post(webhook_url, json={'text': f'{name}が認証されました！'})
                    # 最後に認証された時間を更新
                    last_auth[name] = time.time()
                    print(f'{name}が認証されました！')  # 認証されたことをコンソールに表示

    # 画像を表示
    cv2.imshow('frame', frame)

    # 'q'キーが押されたらループを抜ける
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# キャプチャをリリースしてウィンドウを閉じる
cap.release()
cv2.destroyAllWindows()
