data = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

print(data[1:4])

print(data[:3])

print(data[:])

copy_data = data[:]
print(data is copy_data)
print(data == copy_data)

print(data[::2])
print(data[:-1])
print(data[::-1])

text = "Python"

print(text[1:4])

print(text[::-1])

text = "パイソン"
print(text == text[::-1])
# False

text = "しんぶんし"
print(text == text[::-1])
# True

text = "よのなかねかおかおかねかなのよ"
print(text == text[::-1])
# True

s = slice(1, 4, 2)

data = [1, 2, 3, 4, 5]

print(data[s])

my_slice = slice(2, None, 2)
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(data[my_slice])