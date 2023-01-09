toshi = ["東京", "名古屋", "大阪", "京都", "福岡"]
maxkion = [32, 28, 27, 26, 27]
minkion = [25, 21, 20, 19, 22]

for a, b, c in zip(toshi, maxkion, minkion):
	print(a, "の最高気温は", b, "最低気温は", c, "です。")
