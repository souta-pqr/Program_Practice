from collections import defaultdict

counts = defaultdict(int)
print(counts['apple'])

counts['apple'] += 1
print(counts)

groups = defaultdict(list)
groups['A'].append('apple')
groups['A'].append('avocado')
print(groups)

word_counts = {}
text = 'apple banana apple banana cherry'
for word in text.split():
    word_counts.setdefault(word, 0)
    word_counts[word] += 1

from collections import defaultdict

word_counts = defaultdict(int)
for word in text.split():
    word_counts[word] += 1

student_by_grade = {}
students = [('Alice', 'A'), ('Bob', 'B'), ('Charlie', 'A')]
for name, grade in students:
    student_by_grade.setdefault(grade, []).append(name)

students_by_grade = defaultdict(list)
for name, grade in students:
    students_by_grade[grade].append(name)

nested = {}
nested.setdefault('config', {}).setdefault('setting', {})['debug'] = True

nested = defaultdict(lambda: defaultdict(dict))
nested['config']['setting']['debug'] = True