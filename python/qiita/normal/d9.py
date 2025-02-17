word_counts = {}
text = 'apple banana apple strawberry banana lemon'
for word in text.split():
    word_counts.setdefault(word, 0)
    word_counts[word] += 1
    print(word_counts)

# text = 'apple banana apple strawberry banana lemon'
# for word in text.split():
#     word_counts.setdefault(word, 90)
#     word_counts[word] += 1
#     print(word_counts)
