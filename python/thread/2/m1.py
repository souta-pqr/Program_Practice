from multiprocessing import Process 
import os

#子プロセスが実行する処理
def run_proc(name):
    print("Run Child process {} ({})...".format(name, os.getpid()))

print("Parent process {}.".format(os.getpid()))
p = Process(target=run_proc, args=("test",))
print("Child process will start.")
p.start()
p.join()
print("Child process end.")