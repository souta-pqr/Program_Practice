name: bool = "Alice" # mypy error
age: int = 25

def greet(name: str) -> None:
    print(f"Hello, {name}!")