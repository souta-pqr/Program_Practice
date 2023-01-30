urls = [
	'https://twitter.com',
	'https://facebook.com',
	'https://instagram.com',
]
from hashlib import md5
from pathlib import Path
from urllib import request
import time

def download(url):
	req = request.Request(url)
	# "fail"meini"/"nadogafukumarenaiyounisuru
	name = md5(url.encode("utf-8")).hexdigest()
	file_path = "./" + name
	with request.urlopen(req) as res:
		Path(file_path).write_bytes(res.read())
		return url, file_path


def elapsed_time(f):
	def wrapper(*args, **kwargs):
		st = time.time()
		v = f(*args, **kwargs)
		print(f"{f.__name__}: {time.time() - st}")
		return v
	return wrapper

@elapsed_time
def get_sequential():
	for url in urls:
		print(download(url))

get_sequential()
