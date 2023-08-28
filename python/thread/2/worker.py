import time
import queue
from multiprocessing.managers import BaseManager

class QueueManager(BaseManager):
    pass

QueueManager.register("get_task_queue")
QueueManager.register("get_result_queue")

server_addr = "127.0.0.1"
print("Connect to server {}...".format(server_addr))

m = QueueManager(address=(server_addr, 5000), authkey=b"abc")
m.connect()

task = m.get_task_queue()
result = m.get_result_queue()

for i in range(10):
    try:
        n = task.get(timeout=1)
        print("run task {} * {}...".format(n, n))
        r = "{} * {} = {}".format(n, n, n*n)
        time.sleep(1)
        result.put(r)
    except queue.Empty:
        print("task queue is empty.")

print("worker exit.")