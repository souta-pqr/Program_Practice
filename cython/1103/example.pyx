def fibonacci(int n):
    cdef int int
    cdef double a = 0.0, b = 1.0, temp

    for i in range(n):
        temp = a
        a = b
        b = temp + b
    
    return a
    