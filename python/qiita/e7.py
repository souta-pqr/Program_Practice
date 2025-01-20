import fileinput
import sys

for line in fileinput.input(files=sys.argv[1:]):
    print(line.strip())