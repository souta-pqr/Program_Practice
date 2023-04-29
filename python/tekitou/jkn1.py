aa = [['桜島', 322, 4343], ['コマーシャル', 8944, 390.3]]

bb = [ans + [ans[2]/ans[1]] for ans in aa]
print(bb)

cc = []

for item in aa:
  cc.append(item + [item[2] / item[1]])

print(cc)
