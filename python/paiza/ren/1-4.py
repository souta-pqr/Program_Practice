vowels = ["a","i","u","e","o","A","I","U","E","O"]
word = input()

word = ''.join(c for c in word if c not in vowels)
print(word)
