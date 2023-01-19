def print_page(one, two, three):
	print(one)
	print(two)
	print(three)

contents = ["my content", "content2", "content3"]

# リストやタプルの保持しているものを位置引数として渡せる
print(print_page(*contents))

def print_pages(content, published, author):
	print(content)
	print("published:", published)
	print("author:", author)

footer = {"published": 2019, "author": "kobo fira"}

# 辞書の値をキーワード引数として渡す
print_pages("my content", **footer)
