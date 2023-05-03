import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 1, 100)
y = x**2
fig = plt.figure(figsize=(12, 8))
ax = fig.add_subplot(111)
ax.plot(x, y)
plt.show()
