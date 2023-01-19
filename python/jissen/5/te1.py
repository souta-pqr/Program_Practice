def print_page(content="no content"):
	print(content)

print_page()
print_page("maimaigoenn")

def print_title(printer,title):
	print("@@@@@")
	printer(title.upper())
	print("@@@@@")

print_title(print_page, "python practice book")
