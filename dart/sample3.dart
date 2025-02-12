// 基本的な型
int number = 42;
double price = 42.42;
string name = "Dart";
bool isTrue = true;
var something = "hello"; // 型推論

// 定数
final age = 30; // 実行時に値が決まる定数
const pi = 3.14; // コンパイル時に値が決まる定数

// Null許容型（?をつける）
String? nullableName; // nullを許容する文字列型

switch (fruit) {
    case "リンゴ":
        print("赤い果物");
        break;
    case "バナナ":
        print("黄色い果物");
        break;
    default:
        print("その他の果物");
}

List<String> fruits = ["リンゴ", "バナナ", "イチゴ"];
fruits.add("メロン");
fruits.remove("バナナ");
print(fruits[0]); // リンゴ

Map<string, int> ages = {
    "John": 30,
    "Alice": 25,
    "Bob": 20,
};
print(ages["John"]); // 30
ages["John"] = 35;

Set<String> uniqueNames = {"Bob", "Alice", "Bob"}; // {"Bob", "Alice"}

int add(int a, int b) {
    return a + b;
}

int multiply(int a, int b) => a * b;

String greet(String name, [String? title]) {
    if (title != null) {
        return "Hello, $title $name";
    }
    return "Hello, $name";
}

void printPerson({String? name, int? age}) {
    print("$name is $age years old");
}

add(1, 2); // 3
multiply(2, 3); // 6
greet("John"); // Hello, John
printPerson(name: "John", age: 30); // John is 30 years old

class Person {
    String name;
    int age;

    Person(this.name, this.age);

    Person.guest() {
        name = "guest";
        age = 0;
    }

    void introduce() {
        print("I'm $name, $age years old");
    }

    // getter
    String get description => "$name is $age years old";

    // setter
    set setAge(int value) {
        if (value >= 0) {
            age = value;
        }
    }
}

void main() {
    var person = Person("John", 30);
    person.introduce(); // I'm John, 30 years old

    var guest = Person.guest();
    print(guest.description); // guest is 0 years old
}