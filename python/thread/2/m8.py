from multiprocessing import Process, Lock

def f(i):
    lock.acquire()
    try:
        print("hello world", i)
    finally:
        lock.release()

lock = Lock()

for num in range(10):
    Process(target=f, args=(num,)).start()