import math

print(math.gcd(40, 5))

def max_math(a,b):
    while b:
        a, b = b, a % b
    return a

def main():
    try:
        num1 = int(input("最大公約数を求める１つ目の整数を入力してください"))
        num2 = int(input("最大公約数を求める２つ目の整数を入力してください"))

        if num1 < 0 or num2 < 0:
            print("非負の整数を入力してください")
        else:
            result = max_math(num1, num2)
            print(f"{num1}と{num2}の最大公約数は{result}です")
    except ValueError:
        print("無効な入力です.")

if __name__ == "__main__":
    main()