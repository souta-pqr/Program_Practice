import numpy as np
from multiprocessing import shared_memory

existing_shm = shared_memory.SharedMemory(name='shm') # shmという共有メモリを取得
c = np.ndarray((3, 3), dtype=np.float64, buffer=existing_shm.buf) 
print(c)
# ここでcを変更するとterminal_1のbも変わる