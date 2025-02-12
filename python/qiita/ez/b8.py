import bisect

lst = [1, 2, 4, 5]

position = bisect.bisect(lst, 3)
print(f"3を挿入すべき位置：{position}")

bisect.insort_left(lst, 3)
print(f"3を挿入後のリスト：{lst}")
