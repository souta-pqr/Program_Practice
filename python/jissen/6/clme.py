from operator import attrgetter
class Page:
	book_title = "Python Practice Book"
	def __init__(self, num, content):
		self.num = num
		self.content = content
	def output(self):
		return f"{self.content}"
	# クラスメソッドの第一引数はクラスオブジェクト
	@classmethod
	def print_pages(cls, *pages):
		# クラスオブジェクトの利用
		print(cls.book_title)
		pages = list(pages)
		# ページ順に並び替えて出力
		for page in sorted(pages, key=attrgetter("num")):
			print(page.output())

first = Page(1, "first page")
second = Page(2, "second page")
third = Page(3, "third page")

Page.print_pages(first, third, second)
first.print_pages(first, third, second)

