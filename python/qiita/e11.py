import os
import time

file_info = os.stat("file1.txt")

last_accessed = time.ctime(file_info.st_atime)
print(f"Last accessed: {last_accessed}")