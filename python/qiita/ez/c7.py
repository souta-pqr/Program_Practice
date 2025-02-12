import statistics

data = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 算術平均
mean_value = statistics.mean(data)
print(f"Mean: {mean_value}")

# 中央値
median_value = statistics.median(data)
print(f"Median: {median_value}")

# 最頻値
data_with_mode = [1, 2, 2, 3, 4, 5]
mode_value = statistics.mode(data_with_mode)
print(f"Mode: {mode_value}")

# 分散
variance_value = statistics.variance(data)
print(f"Variance: {variance_value}")

# 標準偏差
stdev_value = statistics.stdev(data)
print(f"Standard deviation: {stdev_value}")

# 調和平均
harmonic_mean_value = statistics.harmonic_mean(data)
print(f"Harmonic mean: {harmonic_mean_value}")

# 文位点
quantiles = statistics.quantiles(data, n=4)
print(f"Quantiles: {quantiles}")