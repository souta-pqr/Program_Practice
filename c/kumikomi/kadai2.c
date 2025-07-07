//ボタン入力回数カウンタ
#include <stdio.h>
#include <wiringPi.h>
#include <unistd.h>

#define BUTTON_PIN 1 // GPIOピン番号（WiringPiのピン番号）
#define LED_PIN 0    // GPIOピン番号（WiringPiのピン番号）
#define MAX_COUNT 10 // 最大カウント数

// 内容:
// ボタンが押された回数をカウントする
// ボタンが押されるたびに，カウント値を標準出力に表示する
// 10回押されたら終了する

// サンプル仕様:
// BuTTON_PINを入力ピンとして設定
// ボタンが押された（LOW -> HiGHの立ち上がり）タイミングでカウント
// カウント値をprintfで表示
// 10回押されたら終了

int main(void) {
    wiringPiSetup(); // WiringPiの初期化
    pinMode(BUTTON_PIN, INPUT); // ボタンピンを入力モードに設定
    pinMode(LED_PIN, OUTPUT); // LEDピンを出力モードに設定

    int count = 0; // ボタン押下回数を管理する変数

    while (count < MAX_COUNT) {
        if (digitalRead(BUTTON_PIN) == HIGH) { // ボタンが押されたかチェック
            count++; // カウントを増やす
            printf("Button pressed %d times\n", count); // カウント値を表示
            digitalWrite(LED_PIN, HIGH); //LEDをONにする
            sleep(1);
            digitalWrite(LED_PIN, LOW); // LEDをOFFにする
            while (digitalRead(BUTTON_PIN) == HIGH); // ボタンが離される
        }
        else {
            digitalWrite(LED_PIN, LOW); // LEDをOFFにする
        }
        sleep(1); // 1秒待機
    }
    printf("Button pressed %d times. Exiting.\n", count); // 終了メッセージを表示
    return 0
}