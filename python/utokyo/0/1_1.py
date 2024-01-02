def median(x, y, z):
    if x <= y:
        if y <= z:
            return y
        elif x <= z:
            return z
        else:
            return x
    elif x <= z:
        return x
    elif y <= z:
        return z
    else:
        return y
    
assert(median(3, 2, 1) == 2)