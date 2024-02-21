import mysql.connector

def save_conversation_to_db(user_id, conversation):
    # MySQLデータベースに接続
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="souta0116",
        database="reserveInfo"  # データベース名を修正
    )
    cursor = db.cursor()
    # 会話をデータベースに保存
    query = "INSERT INTO conversations (user_id, conversation) VALUES (%s, %s)"
    values = (user_id, conversation)
    cursor.execute(query, values)
    db.commit()

def personality_test_bot():
    user_id = input("あなたのIDを入力してください：")
    user_name = input("あなたの名前を入力してください：")
    print("性格診断チャットボットへようこそ、" + user_name + "さん！")
    questions = [
        "あなたは新しい環境にすぐに適応できますか？",
        "あなたは計画を立てることが好きですか、それとも突発的に物事を行うことを好みますか？",
        "あなたは他人と協力して仕事をすることを好みますか、それとも一人で仕事をすることを好みますか？",
        "あなたは新しいアイデアを試すことを好みますか、それとも既知の方法を好みますか？",
    ]
    conversation = []
    for question in questions:
        print(question)
        user_message = input("> ")
        conversation.append({"question": question, "answer": user_message})
    # 会話をデータベースに保存
    save_conversation_to_db(user_id, str(conversation))

personality_test_bot()
