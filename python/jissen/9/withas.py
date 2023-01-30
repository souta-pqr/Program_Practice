class ContextManager:
	def __enter__(self):
		return 1
	def __exit__(self, exc_type, exc_value, traceback):
		pass

with ContextManager() as f:
	print(f)
