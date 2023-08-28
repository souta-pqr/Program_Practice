import subprocess

obj = subprocess.run(["ls", "-l"], stdout=subprocess.PIPE)
print("stdout:\n{}".format(obj.stdout.decode()))