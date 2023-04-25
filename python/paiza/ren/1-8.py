a = int(input())
b = input()
d = 0

for i in range(a-1):
    c = input()
    if c[0] != b[-1]:
        print(b[-1] + " " + c[0])
        break
    elif d == a-2:
        print("Yes")
    else:
        b = c
        d+=1
