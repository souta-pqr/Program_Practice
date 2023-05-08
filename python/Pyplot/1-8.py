import numpy as np
import matplotlib.pyplot as plt

fig = plt.figure()
ax = fig.add_subplot(111)
x_1 = np.linspace(0, 1, 100)
y_1 = x_1
x_2 = np.linspace(0, 1, 100)
y_2 = x_2**2
ax.plot(x_1, y_1, label='y=x')
ax.plot(x_2, y_2, label='$y=x^2$')
ax.set_xlabel('x_value')
ax.set_ylabel('y_value')
plt.legend(loc='best')
plt.show()
