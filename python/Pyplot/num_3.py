import numpy as np

# haiisittei2
array = np.linspace(0, 1, 10)
print(array)
# kakuninn
array2 = np.array([[2, 3], [4, 5], [6, 7]])
print(array2.shape)
print(array2.shape[0])
# gyoutunokatatiwohennkei
array2 = array2.reshape(2, 3)
print(array2)
# tatebekutoruhenohennkann
array2 = array.reshape(-1, 1)
print(array2)
# 1jigennhairetunihennkann
print(array2.ravel())
