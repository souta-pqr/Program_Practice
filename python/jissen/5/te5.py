#Errorを確認

def increment(page_num, last):
	next_page = page_num + 1
	if next_page <= last:
		return next_page

print(increment(2, 10))
print(increment(2))
print(page_num=2, 10)

