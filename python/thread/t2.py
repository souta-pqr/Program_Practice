import threading
import time

def run(n):
    semaphore.acquire()
    time.sleep(1)
    print("current thread: {}\n".format(n))
    semaphore.release()

semaphore = threading.BoundedSemaphore(5)

for i in range(22):
    t = threading.Thread(target=run, args=("t-{}".format(i),))
    t.start()

while threading.active_count() != 1:
    pass
else:
    print("-----全てのスレッドが終了した-----")