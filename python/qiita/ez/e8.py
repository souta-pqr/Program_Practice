import os

file_info = os.stat("file1.txt")

print(f"File size: {file_info.st_size} bytes")

print(f"Last modified: {file_info.st_mtime}")

print(f"User ID: {file_info.st_uid}")

print(f"Group ID: {file_info.st_gid}")