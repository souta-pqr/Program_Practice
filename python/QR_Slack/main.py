import qrcode
import pandas as pd
from slack_sdk.webhook import WebhookClient
from slack_sdk.errors import SlackApiError

# QRコードを作成する関数
def create_qr(data, filename):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(fill='black', back_color='white')
    img.save(filename)

# QRコードを登録する関数
def register_qr(data, filename, df):
    create_qr(data, filename)
    df = df.append({'name': data, 'filename': filename}, ignore_index=True)
    df.to_csv('qr_codes.csv', index=False)

# Slackに通知する関数
def notify_slack(name):
    url = ''
    client = WebhookClient(url)
    try:
        response = client.send(text=f'{name}さんに通知されました．')
    except SlackApiError as e:
        assert e.response["error"]

# QRコードのデータフレームを作成
df = pd.DataFrame(columns=['name', 'filename'])

# QRコードを作成して登録
register_qr('〇〇さん', 'qrcode.png', df)

# Slackに通知
notify_slack('〇〇さん')
