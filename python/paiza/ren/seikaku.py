n = int(input())
ab = [None] * n

for i in range(n):
	a, b = [int(e) for e in input().split(" ")]
	ab[i] = [a, b]

ab.sort(reverse=True)

for i in range(n):
	[a, b] = ab[i]
	print(a, b)
