#include <iostream>
#include <cmath>
using namespace std;

struct Point {
    double x;
    double y;
};

// 2点間の距離を計算する関数
double calculateDistance(const Point &p1, const Point &p2) {
    return sqrt(pow(p2.x - p1.x, 2) + pow(p2.y - p1.y, 2));
}

// 点の情報を入力する関数
void inputPoint(Point &p, int pointNum) {
    cout << "点" << pointNum << "の座標を入力してください：" << endl;
    cout << "x座標: ";
    cin >> p.x;
    cout << "y座標: ";
    cin >> p.y;
}

// 点の情報を表示する関数
void displayPoint(const Point &p, int pointNum) {
    cout << "点" << pointNum << "(" << p.x << ", " << p.y << ")" << endl;
}

int main() {
    int n;
    cout << "入力する点の数を入力してください: ";
    cin >> n;

    Point *points = new Point[n];

    // 点の座標を入力
    for (int i = 0; i < n; i++) {
        inputPoint(points[i], i + 1);
    }

    // 入力された点を表示
    cout << "\n入力された点：" << endl;
    for (int i = 0; i < n; i++) {
        displayPoint(points[i], i + 1);
    }

    // 全ての点の組み合わせの距離を計算して表示
    cout << "\n2点間の距離：" << endl;
    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            double distance = calculateDistance(points[i], points[j]);
            cout << "点" << (i + 1) << "と点" << (j + 1) << "の距離: " 
                 << distance << endl;
        }
    }

    delete[] points;
    return 0;
}