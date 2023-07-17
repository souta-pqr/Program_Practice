import matplotlib.pyplot as plt

pair_list = [(15, 120), (14, 80), (17,150), (16, 150), (16,110), (15,100), (13,70)]
plt.scatter([x for x,y in pair_list], [y for x, y in pair_list])