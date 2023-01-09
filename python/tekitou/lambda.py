data = [1, 2, 3, 4, 5]

for d in map(lambda x: x*2, data):
	print(d)

print()

# リスト内包表記
for d in [x*2 for x in data]:
	print(d)

