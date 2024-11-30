# include <iostream>
# include <string>

class Shape {
    protected:
        string color

    public:
        shape(string c) : color(c) {}

        // 仮想関数
        virtual double getArea() = 0; // 純粋仮想関数

        // 仮想デストラクタ
        virtual ~shape() {}
};

class Circle : public shape {
    private:
        double radius;

    public:
        Circle(string c, double r)
            : shape(c), radius(r) {}

        //　オーバーライド
        double getArea() override {
            return 3.14 * radius * radius;
        }
};