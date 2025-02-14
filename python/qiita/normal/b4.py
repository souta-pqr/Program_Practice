# isは同一性・・・同じオブジェクトかどうか
# ==は等価性・・・オブジェクトの値が等しいか
a = [1, 2, 3]
b = [1, 2, 3]
print(id(a))
print(id(b))
print(a is b)
print(a == b)
