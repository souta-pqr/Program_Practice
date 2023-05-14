N = int(input())

for i in range(N):
    [t, h, m] = input().split()
    th = int(t[:2])
    tm = int(t[3:])
    h = int(h)
    m = int(m)

    ah = th + h
    am = tm + m

    if am >= 60:
        ah += 1
        am -= 60
    if ah >= 24:
        ah -= 24

    ah = str(ah)
    am = str(am)

    if len(ah) == 1:
        ah = "0" + ah
    if len(am) == 1:
        am = "0" + am

    print(ah + ":" + am)
