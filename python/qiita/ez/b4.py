from collections import Counter

text = "apple orange banana apple orange orange"

word_count = Counter(text.split())

print(word_count)