from multiprocessing import Pool
import os
import time
import random

def long_time_task(name):
    print("Run task {} ({})...".format(name, os.getpid()))
    start = time.time()
    time.sleep(random.random() * 3)
    end = time.time()
    print("Task {} runs {} seconds.".format(name, (end - start)))

print("Parent process {}.".format(os.getpid()))
p = Pool(4)
for i in range(5):
    p.apply_async(long_time_task, args=(i,))

print("Waiting for all subprocesses done...")
p.close()
p.join()
print("All subprocesses done.")