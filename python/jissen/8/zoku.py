class Mutable:
	def __init__(self, attr_map):
	# 辞書のキーを属性名にしたインスタンス変数を用意
		for k, v in attr_map.items():
			setattr(self, str(k), v)

m = Mutable({"a": 1, "b": 2})
print(m.a) 

attr = "b"
print(getattr(m, attr))

text = "python"
instance_method = getattr(text, "upper")
print(instance_method)
print(instance_method()) # text.upper()と同等

delattr(m, "a")
print(m.a) # ERROR
