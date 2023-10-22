#include <string>
#include <iostream>

using namespace std;

class Human {
private:
  string full_name;
  int height;
  int weight;

public:
  //　コンストラクタ
  Human(const string& name, int h, int w) {
    full_name = name;
    height = h;
    weight = w;
  }

  string name() {
    return full_name;
  }

  int get_height() {
    return height;
  }

  int get_weight() {
    return weight;
  }

  void grow_fat(int dw) {
    weight += dw;
  }

  void slim_off(int dw) {
    weight -= dw;
  }
};

int main()
{
  Human nakano("中野太郎", 183, 89);
  Human morita("森田隆司", 168, 58);

  nakano.slim_off(5);
  morita.grow_fat(8);

  cout << "nakano = " << nakano.name() << " " << nakano.get_height() << "cm " << nakano.get_weight() << "kg\n";
  cout << "morita = " << morita.name() << " " << morita.get_height() << "cm " << morita.get_weight() << "ka\n";
}
