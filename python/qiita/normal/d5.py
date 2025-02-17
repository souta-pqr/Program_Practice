matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
transposed = list(zip(*matrix))
print(transposed)

prices = [100, 200, 300]
quantities = [2, 3, 4]
total = sum(p * q for p, q in zip(prices, quantities))
print(total)