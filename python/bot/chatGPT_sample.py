# import json
# from openai import ChatCompletion

# # ChatGPTの初期設定
# api_key = ""
# system_content = """あなたは私のAIアシスタントです。あなたは会話の他に以下のスキルを備えています。

# # 天気予報スキル
# * 指定された場所の天気を調べて回答します。
# * 場所が不明な場合はユーザーに聞き返します。

# # リマインダースキル
# * ユーザーのToDoを指定日時に思い出させます。
# * リマインドすべき日時や内容が不明な場合はユーザーに聞き返します。
# """
# messages = [{"role": "system", "content": system_content}]

# # ChatGPT版　インテント・エンティティの抽出処理
# def extract_intent_gpt(text: str) -> tuple:
#     messages.append({"role": "user", "content": text})

#     # 天気予報とリマインダーの処理を定義
#     functions = [
#         {
#             "name": "get_weather",
#             "description": "天気予報を取得する処理",
#             "parameters": {
#                 "type": "object",
#                 "properties": {
#                     "location": {"type": "string"}
#                 }
#             }
#         },
#         {
#             "name": "add_reminder",
#             "description": "リマインダーを登録する処理",
#             "parameters": {
#                 "type": "object",
#                 "properties": {
#                     "remind_at": {"type": "string"},
#                     "note": {"type": "string"}
#                 }
#             }
#         },
#     ]

#     # ChatGPTの呼び出し
#     resp = ChatCompletion.create(
#         api_key=api_key,
#         model="gpt-3.5-turbo-0613",
#         messages=messages,
#         functions=functions,
#     )

#     # 呼び出し結果の取得
#     message = resp["choices"][0]["message"]
#     messages.append(message)

#     if "function_call" in message:
#         # 天気やリマインダーなどの処理が判定された場合はスキルに対応するインテントとする
#         return (message["function_call"]["name"], json.loads(message["function_call"]["arguments"]))
#     else:
#         # 処理が判定されなかった場合はchatインテントとする
#         if intent == "chat":
#             return ("chat", {"text": message["content"]})
#         else:
#             raise ValueError(f"Unknown intent: {intent}")

# def get_weather(location: str) -> str:
#     # 本当はAPIなどから取得
#     weather = {"weather": "晴れ", "temperature": 38.0}
#     print(f"location: {location} / weather: {weather}")
#     # return f"{location}の天気は、{weather['weather']}。最高気温は{weather['temperature']}度の見込みだよ。"
#     messages.append({"role": "function", "name": "get_weather", "content": json.dumps(weather)})
#     resp = ChatCompletion.create(
#         api_key=api_key,
#         model="gpt-3.5-turbo-0613",
#         messages=messages,
#     )
#     messages.append(resp["choices"][0]["message"])
#     return resp["choices"][0]["message"]["content"]


# def add_reminder(remind_at: str, note: str) -> str:
#     # 本当はAPIなどを叩いてリマインダーを登録
#     reminder = {"remind_at": remind_at, "note": note}
#     print(f"remind_at: {remind_at} / note: {note} / reminder: {reminder}")
#     # return f"{reminder['note']}を、{reminder['remind_at']}にお知らせします。"
#     messages.append({"role": "function", "name": "add_reminder", "content": json.dumps(reminder)})
#     resp = ChatCompletion.create(
#         api_key=api_key,
#         model="gpt-3.5-turbo-0613",
#         messages=messages,
#     )
#     messages.append(resp["choices"][0]["message"])
#     return resp["choices"][0]["message"]["content"]

# # メイン
# while True:
#     # ユーザー入力を取得
#     text = input("user> ")
#     # インテント・エンティティ抽出
#     intent, entities = extract_intent_gpt(text)
#     # スキルの取得
#     skill = globals()[intent]
#     # スキルの実行
#     resp = skill(**entities)
#     print(f"bot> {resp}")
#     messages.append({"role": "user", "content": text})
#     messages.append({"role": "bot", "content": resp})
#     print(messages)
#     messages = messages[-3:]
#     print(messages)