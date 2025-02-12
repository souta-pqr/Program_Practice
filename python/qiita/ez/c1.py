import numbers

x = 10
if isinstance(x, numbers.Integral):
    print(f"{x}は整数です")

y = 3.14
if isinstance(y, numbers.Real):
    print(f"{y}は実数です")