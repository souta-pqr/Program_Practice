#include <memory>

void smartPointerExample() {
    // unique_ptrの使用（単一所有権）
    std::unique_ptr<int> ptr1(new int(5));
    // 自動的にメモリが解放される

    // shared_ptrの使用（共有所有権）
    std::shared_ptr<int> ptr2 = std::make_shared<int>(10);
    std::shared_ptr<int> ptr3 = ptr2; // 参照カウントが増加
    // 参照カウントが0になるとメモリが解放される
}

class ResourceManager {
    private:
        int* resource;

    public:
        ResourceManager(): resource(new int) {}
        ~ResourceManager() {
            delete resource; // デストラクタで自動的にメモリを解放
        }
};