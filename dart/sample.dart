// 変数宣言
var name = "john";
String name = "John";
final name = "John";
const name = "John";

// 関数定義
// 返り値の型 関数名（引数）｛
//  　return 値；
// ｝

// 例
int add(int a, int b) {
    return a + b;
}

// アロー関数（1行で書ける関数）
int add(int a, int b) => a + b;

// クラス定義
class Person {
    // プロパティ
    String name;
    int age;

    // コンストラクタ
    Person(this.name, this.age);

    // メソッド
    void sayhello() {
        print("Hello, I'm Person");
    }
}