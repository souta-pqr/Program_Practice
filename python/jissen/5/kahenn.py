def print_pages(content, *args):
	print(content)
	for more in args:
		print("more;", more)

print_pages("my content")
print_pages("my content", "content2", "content3")

def print_jis(**kwargs):
	for key, value in kwargs.items():
		print(f"{key}:{value}")

print_jis(published=2019, author="souta Kovark")
