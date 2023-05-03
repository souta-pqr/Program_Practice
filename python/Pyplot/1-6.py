import numpy as np
import matplotlib.pyplot as plt

fig, axes = plt.subplots(2, 2, figsize=(20, 12))
one_dimension_axes = axes.ravel()
x = np.linspace(0, 1, 100)
for i, ax in enumerate(one_dimension_axes):
	ax.plot(x, x**(i+1))

plt.show()
