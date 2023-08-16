import sys

try:
    num = 1/0
except:
    exc_type, exc_value, exc_traceback = sys.exc_info()
    print("例外の型:", exc_type)
    print("例外のオブジェクト:", exc_value)
    print("トレースバック情報:", exc_traceback)