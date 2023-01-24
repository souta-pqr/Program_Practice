from datetime import datetime

def print_page(content, timestamp=None): # デフォルト引数にした場合は一度呼び出された値が保持されてしまう
	if timestamp is None:
		timestamp = datetime.now()
	print(content)
	print(timestamp)

print_page("my content1")
print_page("my content2")
