class Users:
	def __init__(self, nickname, old, birth, state):
		self.nickname = nickname
		self.old = int(old)
		self.birth = birth
		self.state = state

n = int(input)
users = []
for i in range(n):
	data = input().rstrip().split()
	users.append(Users(data[0], data[1], data[2], data[3]))

users.sort(key=lambda user: user.old)

for user in users:
	print(user.nickname, user.old, user.birth, user.state)
