user_input = int(input("Enter a number: "))
result = user_input % 2
print(result)

user_input = int(input("Enter a number: "))
result = f'{user_input} is {"even" if user_input % 2 == 0 else "odd"}'
print(result)