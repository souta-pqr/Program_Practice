x = "python"
def f():
	print(x)
	x = "f_function" # グローバル変数と同名のローカル変数は定義できない
	print(x)

f() # ERROR
