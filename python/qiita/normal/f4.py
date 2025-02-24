def fibonacchi():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

fib = fibonacchi()
for _ in range(10):
    print(next(fib))

def custom_generator():
    value = 0
    while True:
        received = yield value
        if received is not None:
            value = received

gen = custom_generator()
print(next(gen)) # 0
print(gen.send(42)) # 42