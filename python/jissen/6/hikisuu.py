class Page:
	def __init__(self, num, content, section=None):
		self.num = num
		self.content = content
		self.section = section
	def output(self):
		return f"{self.content}"

title_page = Page(0, "Python Practice Book")
print(title_page.section)
print(title_page.output())

first_page = Page(1, "first page", 1)
print(first_page.section)
print(first_page.output())
