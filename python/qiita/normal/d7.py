scores = {}
if 'Alice' not in scores:
    scores['Alice'] = 0
scores['Alice'] += 1

print(scores)

scores = {}
scores.setdefault('Alice', 0) += 1

print(scores)