notebook = """
note
book
"""
print(notebook)

print("book"*4)
print("nisc"+"mariokart")

for char in "book":
	print(char)

title = "book"
print(f"python practice {title}")
print(f"python practice {title + 'note'}")

note = "note"

print(f"title={title}, note={note}")
print(f"{title=}, {note=}")
print(f"{title.upper()=}")

print("python {} {}".format("practice", "book"))
print("python {1} {0}".format("book", "practice"))
print("python {a} {b}".format(a="practice", b="book"))
