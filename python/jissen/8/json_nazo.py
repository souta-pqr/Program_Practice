# ERROR理由分からん
import json
class Config:
	def __init__(self, filename):
		self.config = json.load(open(filename))
	def __getattr__(self, name):
		if name in self.config:
			return self.config[name]
		# 存在しない設定値へのアクセスはエラーとする
		raise AttributeError()

conf = Config("config.json")
print(conf.url)
