def stats(xs):
    return min(xs), max(xs), sum(xs) / len(xs)

lo, hi, mean = stats([3, 1, 4, 1, 5, 9])

print (lo, hi, mean)
