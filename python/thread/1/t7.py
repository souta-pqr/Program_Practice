import threading
import time

def print_local_x():
    x = local.x
    print("{}のx: {}".format(threading.current_thread().name, x))

def set_thread_local_x(x):
    local.x = x
    print("{}のxを設定しました.".format(threading.current_thread().name))
    time.sleep(1)
    print_local_x()

local = threading.local()
t1 = threading.Thread(target=set_thread_local_x, args=(5, ), name="Thread-A")
t2 = threading.Thread(target=set_thread_local_x, args=(10, ), name="Thread-B")
t1.start()
t2.start()
t1.join()
t2.join()