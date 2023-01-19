def print_pages(*args, **kwargs):
	for content in args:
		print(content)
	for key, value in kwargs.items():
		print(f"{key}: {value}")

print_pages("content1", "content2", "content3", published=2019, author="gui tou")
