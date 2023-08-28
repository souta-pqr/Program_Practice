import threading
import time

def  boil_soba():
    print(" スレッド", threading.currentThread().getName())

    print(" そばを茹でます")
    time.sleep(2)
    print(" そばが茹で上がりました")

def make_tuyu():
    print(" スレッド:", threading.currentThread().getName())

    print(" ツユを作ります")
    time.sleep(1)
    print(" ツユができました")

if __name__ == "__main__":
    print("スレッド:", threading.currentThread().getName())

    print("そばを作ります")

    #スレっドを作る
    thread1 = threading.Thread(target=boil_soba)
    thread2 = threading.Thread(target=make_tuyu)

    #スレッドの処理を開始
    thread1.start()
    thread2.start()

    #スレッドの処理を待つ
    thread1.join()
    thread2.join()

    print("盛り付けます")
    print("そばが出来ました")