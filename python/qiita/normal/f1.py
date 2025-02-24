def count_up_to(max_value):
    count = 1
    while count <= max_value:
        yield count
        count += 1

for number in count_up_to(5):
    print(number)

# yield: 関数の状態を保存し，次回の呼び出しでその続きから再開
# return: 関数を終了

def example():
    yield 1
    yield 2
    return 3

for value in example():
    print(value)