start = int(input("開始値（整数）を入力してください"))
stop = int(input("停止値（整数)を入力してください"))

def makex(x):
    while True:
        yield x
        x = x+1

for n in makex(start):
    if n >= stop:
        break
    print(n)
