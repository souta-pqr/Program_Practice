import sys

output=""

with open(r"漢字テキスト.txt", encoding="utf-8") as f:
    for line in f:
        if not line.isspace():
            output+=line

f = open(r"変換後.txt","w")
f.write(output)