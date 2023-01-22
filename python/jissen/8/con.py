class OddNumbers:
	def __contains__(self, item):
		try:
			return item % 2 == 1
		except:
			return False

odds = OddNumbers()
print(1 in odds)
print(4 in odds)
