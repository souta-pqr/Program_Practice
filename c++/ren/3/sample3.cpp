struct Student {
    string name;
    int age;
    double gpa;
};

int main() {
    Student s;
    s.name = "Alice";
    s.age = 20;
    s.gpa = 3.5;

    cout << "Name: " << s.name << endl;
    cout << "Age: " << s.age << endl;
    cout << "GPA: " << s.gpa << endl;

    return 0;

}