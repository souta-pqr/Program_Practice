class Generate:
	def __init__(self):
		self.qu = 1

	def generate_response(self, user_input):
		if user_input == "System :こんにちは":
			return user_input
		elif user_input == "System :さようなら":
			return user_input
		elif self.qu == 0:
			self.qu = 1
			return "なるほど、勉強になりました"
		else:
			self.qu = 0
			return f"{user_input}とはなんですか?"

generate = Generate()
print("endと打てば終わる")

while True:
	nyuuryoku = input("User :")
	if nyuuryoku == "end":
		break
	print(generate.generate_response(f"System :{nyuuryoku}"))
