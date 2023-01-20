x = "python"
def f():
	global x
	x = "book"
	print(x)

f() # globleであることを宣言しておけばglobal変数として更新し、実行できる

x = [0, 1]
def l():
	x[0] = 2

print(x)
l()
print(x) # コンテナオブジェクトの値を変えたい場合は必要ない  
