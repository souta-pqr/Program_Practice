class Page:
	book_title = "python Practice Book!" # クラス変数定義

print(Page.book_title)

first_page = Page()
second_page = Page()

print(first_page.book_title)

Page.book_title = "python Practice Vook"
print(second_page.book_title)

first_page.book_title = "[Draft]Python Practice Book"
print(first_page.book_title)
print(Page.book_title)

del first_page.book_title

print(first_page.book_title)
