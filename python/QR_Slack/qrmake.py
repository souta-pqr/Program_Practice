import qrcode


# QRコードに埋め込む情報
names = ["小堀", "花川", "保科"]


for name in names:
    # QRコードの生成
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(name)
    qr.make(fit=True)


    # QRコードの描画と保存
    img = qr.make_image(fill='black', back_color='white')
    img.save(f'qrcode_{name}.png')
