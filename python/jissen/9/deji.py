from functools import wraps
import time

def elapsed_time(f):
	@wraps(f)
	def wrapper(*args, **kwargs):
		start = time.time()
		v = f(*args, **kwargs)
		print(f"{f.__name__}: {time.time() - start}")
		return v
	return wrapper

@elapsed_time
def func(n):
	return sum(i for i in range(n))

print(f"{func(1000000)=:,}")
print(f"{func(1000000)=:,}")
	
