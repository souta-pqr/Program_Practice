def increment(page_num, last, *, ignore_error=False):
	a = str(1)
	next_page = page_num + 1
	if next_page <= last:
		return next_page
	if ignore_error:
		return None
	raise ValueError("Invalid arguments")

print(increment(2, 3))
print(increment(3, 3, ignore_error=True))
