def increment(page_num, last):
	next_page = page_num+1
	if next_page <= last:
		return next_page
	raise ValueError("Invalid arguments")

print(increment(1, 3))
print(increment(3, 3))
