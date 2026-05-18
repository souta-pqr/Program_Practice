def get_info():
    return "Alice", 22, "Tokyo"

a, b, c = get_info()

print(a, b, c)

# 次の行はエラーになる
a, b= get_info()
