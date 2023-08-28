from multiprocessing import Process, Manager

def f(d, l, i):
    d[i] = i
    d[str(i)] = str(i)
    l.append(i)
    print(l)

with Manager() as manager:
    shared_dict = manager.dict()
    shared_list = manager.list()
    p_list = []

    for i in range(10):
        p = Process(target=f, args=(shared_dict, shared_list, i))
        p.start()
        p_list.append(p)
    for p in p_list:
        p.join()
    
    print("All subprocesses done.")
    print(shared_dict)
    print(shared_list)