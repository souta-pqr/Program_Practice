v = False

for i in range(5):
    for j in range(5):
        if v is False:
            print("*", end="\t")
            v = True
        else:
            print("-", end="\t")
            v = False
    print()