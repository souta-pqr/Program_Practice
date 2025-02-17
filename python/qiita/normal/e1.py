from collections import defaultdict

word_counts = defaultdict(int)
text = 'apple banana apple strawberry banana lemon'
for word in text.split():
    word_counts[word] += 1
    print(word_counts)