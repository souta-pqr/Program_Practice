from flask import Flask, request
from enum import Enum

class TaskStatus(Enum):
    TODO = "ToDo"
    IN_PROGRESS = "InProgress"
    DONE = "Done"

app = Flask(__name__)

@app.route("/task", methods=["POST"])
def create_task():
    data = request.json
    try:
        status = TaskStatus(data["status"])  # 列挙型で検証
        return {"message": f"タスクは{status}状態で作成されました。"}, 200
    except ValueError:
        return {"error": "不正なステータスです。"}, 400
w