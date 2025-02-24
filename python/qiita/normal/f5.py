def example():
    try:
        while True:
            yield
    except GeneratorExit:
        print("Exiting the generator")

gen = example()
next(gen)
gen.close()