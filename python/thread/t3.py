import threading
import time

event = threading.Event()

def lighter():
    '''
    flag=True: 青信号
    flag=False: 赤信号
    '''
    count = 0
    event.set()
    while True:
        if 5 < count <= 10:
            event.clear()
            print("\33[41;1m赤信号...\033[0m")
        elif count > 10:
            event.set()
            count = 0
        else:
            print("\33[42;1m青信号...\033[0m")
        
        time.sleep(1)
        count += 1

def car(name):
    while True:
        if event.is_set():
            print("[{}] 前進する...".format(name))
            time.sleep(1)
        else:
            print("[{}] 赤信号のため，信号を待つ...".format(name))
            event.wait()
            print("[{}] 青信号のため，全身開始...".format(name))

light = threading.Thread(target=lighter,)
light.start()

car = threading.Thread(target=car, args=("MIMI",))
car.start()