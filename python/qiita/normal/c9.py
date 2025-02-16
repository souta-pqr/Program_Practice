numbers = [1, 2, 3, 4, 5]
doubles = list(map(lambda x: x * 2, numbers))
print(doubles)

str_numbers = ['1', '2', '3', '4', '5']
int_numbers = list(map(int, str_numbers))
print(int_numbers)

numbers = [-2, -1, 0, 1, 2]
absolutes = list(map(abs, numbers))
print(absolutes)

words = ['hello', 'world', 'python']
upper_words = list(map(str.upper, words))
print(upper_words)

def add_numbers(x, y):
    return x + y

list1 = [1, 2, 3]
list2 = [10, 20, 30]
result = list(map(add_numbers, list1, list2))
print(result)

numbers = [1, 2, 3, 4, 5]
squared_map = list(map(lambda x: x**2, numbers))
squared_comp = [x**2 for x in numbers]

def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

temperatures_c = [0, 10, 20, 30, 40]
temperatures_f = list(map(celsius_to_fahrenheit, temperatures_c))
print(temperatures_f)

dirty_data = [' python ', '   java', 'javaScript   ']
clean_data = list(map(str.strip, dirty_data))
print(clean_data)

