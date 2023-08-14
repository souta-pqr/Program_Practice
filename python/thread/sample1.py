import threading
import time

def boil_soba():
    print(" スレッド", threading.currentThread().getName())

    print(" そばを茹でます")
    time.sleep(2)
    print(" そばが茹で上がりました")

if __name__ == "__main__":
    print("スレッド", threading.currentThread().getName())

    print("そばを作ります")

    #スレッドを作る
    thread1 = threading.Thread(target=boil_soba)

    #スレッドの処理を開始
    thread1.start()

    #スレッドの処理を待つ
    thread1.join()

    print("盛り付けます")
    print("うどんができました")