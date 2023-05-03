import numpy as np
import matplotlib.pyplot as plt

x_1 = np.linspace(0, 1, 100)
y_1 = x_1
x_2 = np.linspace(0, 1, 100)
y_2 = x_2 ** 2
x_3 = np.linspace(0, 1, 100)
y_3 = x_3 ** 3
x_4 = np.linspace(0, 1, 100)
y_4 = x_4 ** 4
fig, axes = plt.subplots(2, 2, figsize=(20, 12))
axes[0][0].plot(x_1, y_1)
axes[0][1].plot(x_2, y_2)
axes[1][0].plot(x_3, y_3)
axes[1][1].plot(x_4, y_4)

plt.show()
