def increment(page_num):
	return page_num+1

next_page = increment(1)

print(next_page)

print(increment(increment(next_page)))
