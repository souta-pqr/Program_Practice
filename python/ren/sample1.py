def fit(x, y):
    x_mean = sum(x) / len(x)
    y_mean = sum(y) / len(y)

    x_centered = [i - x_mean for i in x]
    y_centered = [i - y_mean for i in y]

    xy = [i * j for i, j in zip(x_centered, y_centered)]
    xx = [i * i for i in x_centered]
    sum_xy = sum(xy)
    sum_xx = sum(xx)

    b = sum_xy / sum_xx
    a = y_mean - b * x_mean

    return a, b

x = [-0.03, 0.16, 0.31, 0.47, 0.61, 0.76, 0.93, 1.08, 1.22, 1.38]
y = [0.01, 0.12, 0.23, 0.34, 0.45, 0.56, 0.67, 0.78, 0.89, 1.00]

print(fit(x, y))