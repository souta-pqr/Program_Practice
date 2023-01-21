from collections import abc, UserDict
class MyDict(UserDict):
	pass

def get_value(obj, key):
	if not isinstance(obj, abc.Mapping):
		raise ValueError
	return obj[key]

mydict = MyDict()
mydict["a"] = 1

print(get_value(mydict, "a"))
