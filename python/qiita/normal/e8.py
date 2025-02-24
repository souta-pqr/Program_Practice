# if __name__ == "__main__"
# python スクリプト実行された場合: __name__ には "__main__" が入る
# スクリプトがモジュールとしてインポートされた場合: __name__ にはモジュール名が入る

def main():
    print("This script is run directly")

if __name__ == "__main__":
    main()