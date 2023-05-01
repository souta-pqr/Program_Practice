values = input().split()
N = int(values[0])
M = int(values[1])

A = [0] * N
values = input().split()
for i in range(N):
    A[i] = int(values[i])

B = [0] * M
values = input().split()
for i in range(M):
    B[i] = int(values[i])

head = 0
for i in B:
    for j in range(i):
        if j == i - 1:
            print(A[head])
        else:
            print(A[head], end=" ")

        head += 1
