import reprlib

class MyRepr(reprlib.Repr):
    def __init__(self):
        super().__init__()
        self.maxlist = 10

    def repr_list(self, obj, level):
        if len(obj) > self.maxlist:
            return '[%s, ...]' % ', '.join(map(self.repr, obj[:self.maxlist]))
        return super().repr_list(obj, level)

large_list = [i for i in range(100)]
my_repr = MyRepr()
print(my_repr.repr(large_list))
# Output: '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ...]'