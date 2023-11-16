def remove_unmatched_brackets_from_file(input_filename, output_filename):
    with open(input_filename, 'r', encoding='utf-8') as file:
        text = file.read()
    stack = []
    remove_indices = []
    for i, char in enumerate(text):
        if char == '(':
            stack.append(i)
        elif char == ')':
            if stack:
                stack.pop()
            else:
                remove_indices.append(i)
    remove_indices.extend(stack)
    new_text = ''.join([char for i, char in enumerate(text) if i not in remove_indices])
    with open(output_filename, 'w', encoding='utf-8') as file:
        file.write(new_text)

input_filename = "shori/text_process.txt"
output_filename = "used/last.txt"
remove_unmatched_brackets_from_file(input_filename, output_filename)
