class QueryParams:
	def __init__(self, params):
		self.params = params
	def __bool__(self):
		return bool(self.params)

query = QueryParams({})
print(bool(query))

query = QueryParams({"key": "value"})
print(bool(query))
