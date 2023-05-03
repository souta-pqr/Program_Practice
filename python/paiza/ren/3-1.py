Q = int(input())

for _ in range(Q):
    values = input().split()
    n = float(values[0])
    m = int(values[1])

    print("{:.{}f}".format(n, m))
