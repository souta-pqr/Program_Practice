import sys

def py2_or_py3():
	"""
	実行中のpython 2系か3系かを判定する

	この関数はpython 1.xでの実行は想定しない
	"""
	
	major = sys.version_info.major

	if major < 3:
		return 'python 2'
	else:
		return 'python 3'

print(py2_or_py3())
