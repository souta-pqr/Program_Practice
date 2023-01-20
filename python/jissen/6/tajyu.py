class Page:
	def __init__(self, num, content):
		self.num = num
		self.content = content
	def output(self):
		return f"{self.content}"

class HTMLPageMixin:
	def to_html(self):
		return f"<html><body>{self.output()}</body></html>"

class WebPage(Page, HTMLPageMixin):
	pass

page = WebPage(0, "web content")
print(page.to_html())
