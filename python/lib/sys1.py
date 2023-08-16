import sys

print("コマンドライン引数:", sys.argv)

print("スクリプト名:", sys.argv[0])

if len(sys.argv) > 1:
    print("1番目の引数:", sys.argv[1])
else:
    print("引数が指定されていません")