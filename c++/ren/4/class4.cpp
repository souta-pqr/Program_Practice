# include <iostream>
# include <string>

class Animal {
    protected:
        string name;
        int age;

    public:
        Animal(string n, int a) : name(n), age(a) {}

        virtual void makeSound() {
            cout << "some generic sound" << endl;
        }
};

class Dog : public Animal {
    private:
        string breed;

    public:
        Dog(string n, int a, string b) : Animal(n, a), breed(b) {}

        void makeSound() override {
            cout << "woof!" << endl;
        }
};