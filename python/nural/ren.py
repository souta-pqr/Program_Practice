import numpy as np
import matplotlib.pyplot as plt
 
# プロット範囲のxを用意
x = np.arange(-5,6)
# x = array([-5, -4, -3, -2, -1,  0,  1,  2,  3,  4,  5])
 
# xに対応するyの値を用意
y = x**3
# y = array([-125,  -64,  -27,   -8,   -1,    0,    1,    8,   27,   64,  125])
 
# pyplot.plot(x, y)でプロット作成
plt.plot(x, y)
 
# plt.show()で画面に表示（Jupyter Notebookの場合は不要）
plt.show()
