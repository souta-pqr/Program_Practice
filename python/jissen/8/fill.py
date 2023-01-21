x = (1, 4, 3, 5, 2)
print(filter(lambda i: i>3, x))
print(list(filter(lambda i: i>3, x)))

y = (1, 0, None, 2, [], "python")
#　真となるオブジェクトだけが残る
print(list(filter(None, y)))
