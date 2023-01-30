class ContextManager:
	#前処理を実装
	def __enter__(self):
		print("__enter__ was called")
	#後処理を実装
	def __exit__(self, exc_type, exc_value, traceback):
		print("__exit__ was called")
		print(f"{exc_type=}")
		print(f"{exc_value=}")
		print(f"{traceback=}")

with ContextManager():
	print("inside the block")

# with ContextManager():
# 	1/0
# このようなエラーを出すものも、raise文なしで、例外が再送出される
