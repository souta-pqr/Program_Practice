import re

text = "(W タシ|(U わたし/あたし))たち"
if re.search(r'\(.*\|', text):
    text1 = re.sub(r'\|\s*\(U\s[^)]*\)', '', text)

print(text1)