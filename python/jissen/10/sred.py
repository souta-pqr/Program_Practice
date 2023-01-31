from concurrent.futures import (ThreadPoolExecutor, wait)

class Counter:
	def __init__(self):
		self.count = 0
	def increment(self):
		self.count = self.count + 1

def count_up(counter):
	#1,000,000kaiinkurimenntosuru
	for _ in range(1000000):
		counter.increment()

counter = Counter()
threads = 2
with ThreadPoolExecutor() as e:
	# 2tunosureddowoyouisi,sorezorede"count_up"woyobidasu
	futures = [e.submit(count_up, counter) for _ in range(threads)]
	done, not_done = wait(futures)

# suutiwokannmakugiridehyouji
#2,000,000nihanatteinai("marutisureddo"niyoruheigai) toomottagaseikakunaataigajikkoukekkatositedeta.
print(f"{counter.count=:,}")
