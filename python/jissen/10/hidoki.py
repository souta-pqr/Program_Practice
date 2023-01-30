# "ThreadPoolExecutor"は"Executor"nogushousabukurasu
from concurrent.futures import(ThreadPoolExecutor, Future)

# hidoukiniokonaitaishori
def func():
	return 1

# hidoukiniokonaitaishoriwo"submit()"niwatasu
future = ThreadPoolExecutor().submit(func)
print(isinstance(future, Future))

# hidoukidejikkousitashorinomodoritiwoshutoku
print(future.result())

# gennzainojyoutaiwokakuninnsuru
print(future.done())
print(future.running())
print(future.cancelled())
