class klass:
	def __new__(cls, *args): # コンストラクタ
		print(f"{cls=}")
		print("new", args)
		# インスタンスを作成して返す
		return super().__new__(cls)
	def __init__(self, *args): # イニシャライザ
		# インスタンスの初期化はこっちでやる
		print("init", args)

kls = klass(1, 2, 3)
