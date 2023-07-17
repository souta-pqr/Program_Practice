moji = str(input("文字列を入力してください．"))
c = int(input("個数を入力してください"))

def rpstr(num, str="*"):
        print("文字列あり---")
        print(num * c)
        print("文字列なし---")
        print("*"*c)

rpstr(moji)