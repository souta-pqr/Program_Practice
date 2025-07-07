// LED点滅プログラム
#include <stdio.h>
#include <unistd.h>
#include <wiringPi.h>

#define LED_PIN 0 // GPIOピン番号（WiringPiのピン番号）
// 内容:
// 1秒ごとのLEDのON/OFFを切り替える
// LEDの状態は変数で管理し，標準出力に「ON」「OFF」と表示
// ビット演算でLEDの状態を切り替える

// サンプル仕様:
// led_steteという変数でLEDの状態(0:OFF, 1:ON)を管理
// 1秒ごとに状態を反転し，状態を表示
// ループで10回繰り返す

int main(void) {
    wiringPiSetup(); // WiringPiの初期化
    pinMode(LED_PIN, OUTPUT); // LEDピンを出力モードに設定

    int led_state = 0; // LEDの状態を管理する変数 (0:OFF, 1:ON)

    for (int i = 0; i < 10; i++) {
        led_state ^= 1; // ビット演算でLEDの状態を反転
        if (led_state) {
            digitalWrite(LED_PIN, HIGH); // LEDをONにする
            printf("ON\n");
        } else {
            digitalWrite(LED_PIN, LOW); // LEDをOFFにする
            printf("OFF\n");
        }
        sleep(1);
    }
    return 0;
}
