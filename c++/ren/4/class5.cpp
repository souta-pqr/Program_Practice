#include <iostream>
#include <string>

class Shape {
    public:
        virtual double getArea() = 0;
        virtual double getPerimeter() = 0;

        virtual void displayInfo() {
            cout << "This is a shape" << endl;
        }

        virtual ~shape() {}
};

class Rectangle : public Shape {
    private:
        double width, height;

    public:
        Rectangle(double w, double h) : width(w), height(h) {}

        double getArea() override {
            return width * height;
        }

        double getPerimeter() override {
            return 2 * (width + height);
        }
};

void printShapeInfo(Shape& shape) {
    cout << "Area: " << shape.getArea() << endl;
    cout << "Perimeter: " << shape.getPerimeter() << endl;
}