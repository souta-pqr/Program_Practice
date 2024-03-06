from flask import Flask, request
import requests

app = Flask(__name__)

# SlackのWebhook URL
SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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'

@app.route('/scan', methods=['POST'])
def handle_scan():
    # QRコードからデータを取得
    data = request.form.get('data')

    # Slackに通知を送る
    message_text = 'QRコードがスキャンされました！データ: {}'.format(data)
    response = requests.post(SLACK_WEBHOOK_URL, json={'text': message_text})
    if response.status_code != 200:
        return 'Slackへの通知に失敗しました: {}'.format(response.status_code), 500

    return 'OK', 200

if __name__ == '__main__':
    app.run(port=5000)
