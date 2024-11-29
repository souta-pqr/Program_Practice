int *ptr = new int;
int *arr = new int[5];

delete ptr;
delete[] arr;

//momory leak
voie badExapmle() {
    int *ptr = new int;
    // no delete
}

//good example
void goodExample() {
    int *ptr = new int;
    // ポインタの使用
    delete ptr;
    ptr = nullptr; // ヌルポインタを代入して，ポインタの無効化
}