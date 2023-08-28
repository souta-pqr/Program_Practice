import numpy as np
from multiprocessing import shared_memory

a = np.ones((3, 3))
shm = shared_memory.SharedMemory(create=True, size=a.nbytes, name='shm') # shmという共有メモリを作成
b = np.ndarray(a.shape, dtype=a.type, buffer=shm.buf) # 共有メモリでaと同じ形のb行列を作成
b[:] = a[:] # aをbにコピーする
print(b)