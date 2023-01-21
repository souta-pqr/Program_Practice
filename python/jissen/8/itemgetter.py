#itemgetterの挙動を確認
from operator import itemgetter
d = {"word": "python", "count": 3}
f = itemgetter("count")
print(f(d))

f = itemgetter("count", "word")
print(f(d))

counts = [
	{"word": "python", "count": 3},
	{"word": "practice", "count": 3},
	{"word": "book", "count": 2},
]

print(sorted(counts, key=itemgetter("count")))

print(sorted(counts, key=itemgetter("count", "word")))
