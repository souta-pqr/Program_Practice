from tqdm import tqdm

epoch = 10000000
e_sum = 0
with tqdm(range(epoch)) as pber_epoch:
    for e in pber_epoch:
        e_sum += e

print(e_sum)