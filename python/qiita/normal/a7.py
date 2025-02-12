from typing import TypedDict

class User(TypedDict):
    name: str
    age: int

user: User = {
    "name": "Alice",
    "age": 25
}

# 不正な型の辞書
invalid_user: User = {
    "name": "Bob",
    "age": "35" # 型が一致しない
}