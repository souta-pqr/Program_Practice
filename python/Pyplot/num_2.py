import numpy as np

lesson_list1 = [1, 2, 3, 4]
lesson_list2 = [5, 6, 7, 8]
lesson_array = np.array([lesson_list1, lesson_list2])
print(lesson_array)
print(lesson_array.shape)
print(lesson_array.dtype)
print("-------------------------------")
# "list"gatadehanaku"taple"gatademoOK.
print(np.zeros([2, 2]))
print(np.ones([3, 3]))
print(np.zeros([2, 2]).dtype)
print(np.ones([3, 3]).dtype)
print("-------------------------------")
test_array = np.array([[1, 2], [3, 4]])
like_zeros_array = np.zeros_like(test_array)
like_ones_array = np.ones_like(test_array)
print(like_zeros_array)
print(like_ones_array)
print(like_zeros_array.dtype)
print(like_ones_array.dtype)
print("-------------------------------")
# karanohairetu
print(np.empty((2, 2)))
print(np.empty((2, 2)).dtype)
print("-------------------------------")
# tannigyoutu
print(np.eye(3))
# haiisitei
print(np.arange(10))
