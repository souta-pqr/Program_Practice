import openai

openai.api_key = ''

def get_response(previous_messages):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=previous_messages
    )
    return response['choices'][0]['message']['content']

def personality_test_bot():
    print("性格診断チャットボットへようこそ！")
    questions = [
        "あなたは新しい環境にすぐに適応できますか？",
        "あなたは計画を立てることが好きですか、それとも spontaneity を好みますか？",
        "あなたは他人と協力して仕事をすることを好みますか、それとも一人で仕事をすることを好みますか？",
        "あなたは新しいアイデアを試すことを好みますか、それとも既知の方法を好みますか？",
    ]
    messages = [
        {"role": "system", "content": "You are a helpful assistant."},
    ]
    for question in questions:
        print(question)
        user_message = input("> ")
        messages.append({"role": "user", "content": user_message})
        response = get_response(messages)
        print("Bot: ", response)

personality_test_bot()
