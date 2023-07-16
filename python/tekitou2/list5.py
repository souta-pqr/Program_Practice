data = [74, 85, 69, 77, 81]
ans = []

for i in data:
    if i >= 80:
        ans.append(i)

num = len(ans)

print("テストの点は" + str(data) + "です．")
print("80点以上は" + str(ans) + "です．")
print("80点以上の人数は" + str(num) + "人です．")