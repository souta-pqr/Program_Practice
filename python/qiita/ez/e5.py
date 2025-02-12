import fileinput

for line in fileinput.input(files="file1.txt", inplace=True):
    print(line.replace("apple", "orange"), end="")