from typing import TypedDict

class User(TypedDict, total=False):
    name: str
    age: int

user: User = {
    "name": "Alice"
}