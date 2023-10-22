#include <string>
#include <iostream>
#include "q1.h"

using namespace std;

Human::Human(const string& fullname, int height, int weight)
{
  this->fullname = fullname;
  this->height = height;
  this->weight = weight;
}

string Human::name() const
{
  return fullname;
}

int Human::get_height() const
{
  return height;
}

int Human::get_weight() const
{
  return weight;
}

void Human::grow_fat(int dw)
{
  weight += dw;
}

void Human::slim_off(int dw)
{
  weight -= dw;
}

int main()
{
  Human nakano("中野太郎", 183, 89);
  Human morita("森田隆司", 168, 58);

  nakano.slim_off(5);
  morita.grow_fat(8);

  cout << "nakano = " << nakano.name() << " " << nakano.get_height() << "cm " << nakano.get_weight() << "kg\n";
  cout << "morita = " << morita.name() << " " << morita.get_height() << "cm " << morita.get_weight() << "ka\n";
}
