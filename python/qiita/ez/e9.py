import os
import stat

file_info = os.stat("file1.txt")

if stat.S_ISDIR(file_info.st_mode):
    print("file1.txt is a directory")
elif stat.S_ISREG(file_info.st_mode):
    print("file1.txt is a regular file")