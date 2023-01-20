class Page:
	def __init__(self, num, content):
		self.num = num
		self.content = content
	@staticmethod
	def check_blank(page):
		return bool(page.content)

page = Page(1, "")
print(Page.check_blank(page))

# 関数で済むなら関数にした方が良いため、この場合はあまり使わない方がいい
