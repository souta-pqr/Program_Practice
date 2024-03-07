import qrcode


# QRコードに埋め込む情報
data = "小堀"


# QRコードの生成
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(data)
qr.make(fit=True)


# QRコードの描画と保存
img = qr.make_image(fill='black', back_color='white')
img.save('qrcode.png')
