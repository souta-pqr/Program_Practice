import numpy as np
import matplotlib.pyplot as plt

# 音声波形のサンプル数
samples = 1000

# ランダムな音声波形を生成
waveform = np.random.normal(0, 1, samples)

# 時間軸を生成
time = np.linspace(0, 1, samples)

# 音声波形をプロット
plt.figure(figsize=(8, 4))
plt.plot(time, waveform)
plt.title("Random Audio Waveform")
plt.xlabel("Time")
plt.ylabel("Amplitude")
plt.grid(True)
plt.show()