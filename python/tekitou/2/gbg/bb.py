def remove_unmatched_brackets(text):
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
    return new_text

text = "テッ|出てたし:。 & (テッ(テッタシー"
print(remove_unmatched_brackets(text))
