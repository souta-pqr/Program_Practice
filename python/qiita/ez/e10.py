import os
import stat

file_info = os.stat("file1.txt")

if file_info.st_mode & stat.S_IRUSR:
    print("User has read permission")

if file_info.st_mode & stat.S_IWUSR:
    print("User has write permission")

if file_info.st_mode & stat.S_IXUSR:
    print("User has execute permission")