x = (1, 4, 3, 5, 2)
print(map(lambda i: i*10, x))
print(list(map(lambda i: i*10, x)))

keys = ("q", "limit", "page")
values = ("python", 10, 2)
# 関数が受け取る引数の数と渡すイテラブルの数の数は一致させる
print(list(map(lambda k, v: f"{k}=v", keys, values)))

# join()と組み合わせてクエリ文字列を作成
print("?" + "&".join(
	map(lambda k, v: f"{k}={v}", keys, values)))
