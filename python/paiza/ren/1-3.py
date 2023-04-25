sum = 0
a, b = [int(e) for e in input().split()]

for i in range(a-1):
    c = int(input())
    sum += b - c
    print(sum)
 
print(b*(b+sum))
