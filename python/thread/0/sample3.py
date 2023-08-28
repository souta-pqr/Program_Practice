from threading import Condition, Thread
import random
import time

# ブロック付きキュー
class BlockingQueue(object):
    def __init__(self):
        self.queue = []
        self.condition = Condition()

    def push(self, obj):
        #ロックを取得する
        with self.condition:
            self.queue.append(obj)
            self.condition.notify_all()
    
    def pop(self):
        #wait()を抜けたスレッドが復帰するループ
        while True:
            #ロックを取得する
            with self.condition:
                if self.queue:
                    return self.queue.pop()
                else:
                    self.condition.wait()
    
#キューから要素を取得するスレッド
class Consumer(Thread):
    def __init__(self, queue):
        super(Consumer, self).__init__()
        self.deamon = True
        self.queue = queue
        
    def run(self):
        while True:
            print(self.queue.pop())

class Producer(Thread):
    def __init__(self, queue):
        super(Producer, self).__init__()
        self.deamon = True
        self.queue = queue

    def run(self):
        while True:
            self.queue.push(random.randint(0, 256))
            time.sleep(1)

if __name__ == '__main__':
    q = BlockingQueue()
    p = Producer(q)
    c = Consumer(q)
    p.start()
    c.start()

    while True:
        time.sleep(1)