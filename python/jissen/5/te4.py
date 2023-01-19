def no_value():
	return

print(no_value())

def no_return():
	pass

print(no_return())

def increment(page_num, last):
	next_num = page_num + 1
	if next_num <= last:
		return next_num

next_page = increment(3, 3)
print(next_page)
