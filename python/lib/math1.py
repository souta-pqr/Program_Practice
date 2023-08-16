import math

print(math.pi)
print(math.sqrt(2))

def main():
    try:
        n = int(input("非負の整数を入力してください"))
        if n < 0:
            print("非負の整数を入力してください")
        else:
            result = math.factorial(n)
            print(f"{n}の階乗は{result}です")
    except ValueError:
        print("無効な入力です")

if __name__ == "__main__":
    main()