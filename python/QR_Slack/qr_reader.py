import cv2
import requests

# QRコードを読み取る
cap = cv2.VideoCapture(0)

# カメラが正しく開けているか確認
if not cap.isOpened():
    raise RuntimeError('カメラが開けません')

detector = cv2.QRCodeDetector()

while True:
    _, img = cap.read()
    if img is None:
        print('画像が読み取れません')
        continue

    data, bbox, _ = detector.detectAndDecode(img)
    if bbox is not None:
        print(f"QR code data:\n{data}")
        break

# QRコードのデータをサーバーにPOSTリクエストとして送信する
response = requests.post('http://localhost:5000/scan', data={'data': data})
print('Response:', response.text)
