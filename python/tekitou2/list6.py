data = ['東京', '名古屋', '大阪', '京都', '福岡']
data1 = [32, 28, 27, 26, 27]
data2 = [25, 21, 20, 19, 22]
for a, b, c in zip(data, data1, data2):
    print(str(a) + "の最高気温は" + str(b) + "最低気温は" + str(c) + "です．")