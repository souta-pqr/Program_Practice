f = open("sample.txt", "r")

lines = f.readlines()

for line in lines:
	print(line, end="")

f.close()
