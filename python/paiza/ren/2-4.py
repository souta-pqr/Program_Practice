N = int(input())
a = []
for i in range(N):
    M_and_a_i = list(map(int, input().split()))
    a.append(M_and_a_i[1:])

for i in range(N):
    print(*a[i])
