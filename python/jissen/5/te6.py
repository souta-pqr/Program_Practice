from datetime import datetime

# デフォルト値をNoneにする(Noneにしないと同じタイムスタンプを返してしまう)
# デフォルト値は可変オブジェクトでなくNoneを使う
def print_page(content, timestamp=None):
	if timestamp is None:
		timestamp = datetime.now()
	print(content)
	print(timestamp)

print_page("my content")
print_page("my content2")
