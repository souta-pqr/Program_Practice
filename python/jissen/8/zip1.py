x = [1, 2, 3]
y = [4, 5, 6, 7]
z = [8, 9]

# 一番短いイテラブルの長さになる
print(list(zip(x, y, z)))

a = [1, 5, 3, 2, 4]
b = [1, 5, 3, 2, 4]

# 自分自身を更新
a.sort()
print(a)

# 新しいリストで返すため、自分自身は変化なし
print(sorted(b))
print(b)

print(sorted(b, reverse=True))
