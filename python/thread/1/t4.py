from threading import Timer

def hello():
    print("hello world")

t = Timer(1, hello)
t.start()