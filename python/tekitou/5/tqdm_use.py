from tqdm import tqdm

import time

for i in tqdm(range(10)):
    time.sleep(0.5)
    print(i)