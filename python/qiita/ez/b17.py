from enum import Flag, auto

class Permissions(Flag):
    READ = auto()
    WRITE = auto()
    EXECUTE = auto()

user_permissions = Permissions.READ | Permissions.WRITE

print(user_permissions)
print(Permissions.READ in user_permissions)