import fileinput

for line in fileinput.input():
    print(f"Processing {fileinput.filename()}: {line.strip()}")