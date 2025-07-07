// 割り込みタイマによるLEDの点滅
#include <stdio.h>
#include <wiringPi.h>
#include <unistd.h>

#define LED_PIN 0 // GPIOピン番号
#define BUTTON_PIN 1 // ボタンのGPIOピン番号
volatile int ledState = LOW; // LEDの状態を保持する変数

/* 内容:
タイマ割込み（ソフトウェアタイマ）を使って，一定間隔でLEDをON/OFFする
メインループでは何もせず，割り込み（コールバック）でLED制御を行う
10回点滅したら終了 */


/* サンプル仕様:
500msごとにLEDの状態を反転
点滅回数をカウントし，10回で終了
割り込み（タイマコールバック）でLED制御 */

void timerCallback(void) {
    static int count = 0;

    LedState = !LedState; // LEDの状態を反転
    digitalWrite(LED_PIN, LedState); // LEDの状態を更新
    printf("LED is %s\n", LedState ? "ON" : "OFF");
    count++;
    if (count >= 10) {
        printf("LED blinked 10 times, stopping...\n");
        exit(0); // 10回点滅したら終了
    }
    // タイマを再設定
    struct itimerval timer;
    timer.it_value.tv_sec = 0;
    timer.it_value.tv_usec = 500000; // 500ms
    timer.it_interval.tv_sec = 0;
    timer.it_interval.tv_usec = 500000; // 500ms
    setitimer(ITIMER_REAL, &timer, NULL);
}

