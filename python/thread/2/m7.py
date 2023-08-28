from multiprocessing import Process
from multiprocessing.managers import SharedMemoryManager

def assign(l, start, end, v):
    for i in range(start, end):
        l[i] = v

if __name__ == "__main__":
    with SharedMemoryManager() as smm:
        sl = smm.ShareableList(range(2000))

        p1 = Process(target=assign, args=(sl, 0, 1000, 0))
        p2 = Process(target=assign, args=(sl, 1000, 2000, 1))
        p1.start()
        p2.start()
        p1.join()
        p2.join()
        total_result = sum(sl)
    print(total_result)