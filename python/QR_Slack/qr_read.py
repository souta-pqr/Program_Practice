import cv2
from pyzbar.pyzbar import decode

# QRコードを読み取る関数
def read_qr():
    cap = cv2.VideoCapture(0)
    while True:
        _, frame = cap.read()
        codes = decode(frame)
        for code in codes:
            data = code.data.decode('utf-8')
            print(f'QR code detected: {data}')

# QRコードを読み取る
read_qr()
