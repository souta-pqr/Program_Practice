import textwrap

a = input()
b = textwrap.wrap(a, width=1)
c = len(a)
sum = 0

for i in range(c):
	if (b[i]) == "/":
		sum += 1
	elif (b[i]) == "<":
		sum += 10
	else:
		pass

print(sum)
