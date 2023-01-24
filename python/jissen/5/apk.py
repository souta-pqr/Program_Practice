def print_page(one, two, three):
	print(one)
	print(two)
	print(three)

contents = ["my content", "content2", "content3"]

print_page(*contents)

def p_g(content, published, author):
	print(content)
	print("publised:", published)
	print("author:", author)

footer = {"published": 2019, "author": "kobo boko"}

p_g("my content", **footer)
