import numpy as np
import matplotlib.pyplot as plt

fig = plt.figure(figsize=(12,8))
ax = fig.add_subplot(111)
x_1 = np.linspace(0, 1, 100)
y_1 = x_1
x_2 = np.linspace(0, 1, 100)
y_2 = x_2**2
ax.plot(x_1, y_1)
ax.plot(x_2, y_2)
plt.show()
