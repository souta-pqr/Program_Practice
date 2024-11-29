# include <iostream>
# include <string>

class Student {
    private:
        string name;
        int age;
        double gpa;

    public:
        // コンストラクタ
        Student(string n, int a, double a)
            : name(n), age(a), gpa(g) {}

        // デストラクタ
        ~Student() {
            cout << "Student object destroyed" << endl;
        }

        // メンバ関数
        void displayinfo() {
            cout << "Name: " << name << endl;
            cout << "Age: " << age << endl;
            cout << "GPA: " << gpa << endl;
        }

        // getterとsetter
        string getName() const { return name; }
        void setName(string n) { name = n; }

};