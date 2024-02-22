import openai
import random

openai.api_key = ''

def get_response(previous_messages):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=previous_messages
    )
    return response['choices'][0]['message']['content']

def personality_test_bot():
    user_name = input("あなたの名前を入力してください：")
    print("性格診断チャットボットへようこそ、" + user_name + "さん！")
    questions = [
        "新しい場面や状況に適応するのは得意ですか、苦手ですか？",
        "他人とのコミュニケーションにおいて、自分から率先して話しかけることがありますか？",
        "ストレスがかかったとき、どのように対処しますか？",
        "チームでの作業が好きですか、それとも個人での作業が好きですか？",
        "他人の意見や感情に敏感ですか、それとも自分の意見や感情を重視しますか？",
        "変化を好みますか、それとも安定性を重視しますか？",
        "目標を設定する際に、具体的な計画を立てる方ですか、それとも大まかな方向性だけを考える方ですか？",
        "リーダーシップの役割を好みますか、それともフォロワーの役割を好みますか？",
        "他人との衝突や意見の食い違いにどのように対処しますか？",
        "新しいスキルや知識を習得することに興味がありますか、それとも既存のスキルや知識を深めることを好みますか？",
    ]
    messages = [
        {"role": "system", "content": "You are a helpful assistant."},
    ]
    question = random.choice(questions)
    print(question)
    user_message = input("> ")
    messages.append({"role": "user", "content": user_message})
    response = get_response(messages)
    print("Bot: ", response)

personality_test_bot()
