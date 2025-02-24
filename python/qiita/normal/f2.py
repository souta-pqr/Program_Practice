# ジェネレータ式
squares = (x * x for x in range(5))

for square in squares:
    print(square)

# ジェネレータはイイ
large_list = [x * x for x in range(10**6)]

large_generator = (x * x for x in range(10**6))
# メモリ効率がいい