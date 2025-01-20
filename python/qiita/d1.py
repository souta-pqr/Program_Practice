import itertools

counter = itertools.count(start=10, step=2)
for i in range(5):
    print(next(counter))

# cycle: シーケンスを無限に繰り返す
cycler = itertools.cycle(["A", "B", "C"])
for _ in range(6):
    print(next(cycler))

# repeat: 同じオブジェクトを繰り返す
repeater = itertools.repeat('Hello', times=3)
for iterm in repeater:
    print(iterm)

# chain: 複数のリストを連結する
list1 = [1, 2, 3]
list2 = ["a", "b", "c"]
combined = itertools.chain(list1, list2)
for item in combined:
    print(item)

# zip_longest: 長さの異なるリストを埋めて結合する
list3 = [1, 2, 3]
list4 = ["a", "b"]
zipped = itertools.zip_longest(list3, list4, fillvalue="-")
for item in zipped:
    print(item)

# combinations: 組み合わせを生成
combs = itertools.combinations([1, 2, 3, 4], 2)
for comb in combs:
    print(comb)

# permutations: 順列を生成
perms = itertools.permutations([1, 2, 3], 2)
for perm in perms:
    print(perm)

# product: デカルト積を生成
prod = itertools.product([1, 2], ["A", "B"], repeat=2)
for p in prod:
    print(p)