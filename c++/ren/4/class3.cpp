#include <iostream>

class SafeArray {
    private:
        int* data;
        size_t size;

    public:
        // コンストラクタ
        SafeArray(size_t s) : size(s) {
            data = new int[size];
        }

        // コピーコンストラクタ
        SafeArray(const SafeArray& other) : size(other.size) {
            data = new int[size];
            for (size_t i=0; i<size; i++) {
                data[i] = other.data[i];
            }
        }

        // 代入演算子
        SafeArray& oprator=(const SafeArray& other) {
            if (this != &other) {
                delete[] data;
                size = other.size;
                data = new int[size];
                for (size_t i=0; i<size; i++) {
                    data[i] = other.data[i];
                }
            }
            return *this;
        }

        // デストラクタ
        ~SafeArray() {
            delete[] data;
        }

        // 安全なアクセス
        int& operator[](size_t index) {
            if (index >= size) {
                throw out_of_range("index out of range");
            }
            return data[index];
        }
};