from collections import UserDict
class MyDict(UserDict):
	pass

d = {}
print(isinstance(d, dict))
print(isinstance(d, object))
print(isinstance(d, (list, int, dict)))

print(issubclass(dict, object))
print(issubclass(bool, (list, int, dict)))

def get_value(obj, key):
	if not isistance(obj, dict):
		raise ValueError
	return obj[key]

my_dict = MyDict()
my_dict["a"] = 1
print(my_dict["a"])

# dictのサブクラスではないためエラー
print(get_value(my_dict, "a"))
