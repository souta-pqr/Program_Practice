N = int(input())

M = [0] * N
values = input().split()
for i in range(N):
    M[i] = int(values[i])

for i in range(N):
    for j in range(1, M[i] + 1):
        if j == M[i]:
            print(j)
        else:
            print(j, end=" ")
