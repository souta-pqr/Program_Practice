from contextlib import contextmanager

@contextmanager
def point(**kwargs):
	print("__enter__was called")
	value = kwargs
	try:
		# yield式より上が前処理
		# valueがasキーワードに渡される
		yield value
		# yield式より下が後処理
	except Exception as e:
		# エラー時はこちらも呼ばれる
		print(e)
		raise
	finally:
		print("__exit__ was called")
		print(value)

with point(x=1, y=2) as p:
	print(p)
	p["z"] = 3
