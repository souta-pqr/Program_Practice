#include <stdio.h>
#include <wiringPi.h>
#include <unistd.h>
#include <stdlib.h>
#include <time.h>
#include <sys/time.h>

#define LED_PIN 0 // GPIOピン番号
#define BUTTON_PIN 1 // ボタンのGPIOピン番号
volatile int LedState = LOW; // LEDの状態を保持する変数

void timerCallback(int sig) {
    static int count = 0;
    LedState = !LedState;
    digitalWrite(LED_PIN, LedState);
    printf("LED is %s\n", LedState ? "ON" : "OFF");
    count++;
    if (count >= 10) {
        printf("LED blinked 10 times, stopping...\n");
        exit(0);
    }
}

void waitForButtonPress() {
    while (digitalRead(BUTTON_PIN) == HIGH) {
        delay(10);
    }
    delay(50);
    while (digitalRead(BUTTON_PIN) == LOW) {
        delay(10);
    }
}

int main(void) {
    wiringPiSetup();
    pinMode(LED_PIN, OUTPUT);
    pinMode(BUTTON_PIN, INPUT);
    pullUpDnControl(BUTTON_PIN, PUD_UP);
    srand(time(NULL));

    struct sigaction sa;
    sa.sa_handler = timerCallback;
    sigemptyset(&sa.sa_mask);
    sa.sa_flags = 0;
    sigaction(SIGALRM, &sa, NULL);

    printf("パチンコ練習: ボタンを押してください\n");
    while (1) {
        waitForButtonPress();
        int lottery = rand() % 10;
        if (lottery == 0) {
            printf("当たり! LEDが10回点滅します\n");
            struct itimerval timer;
            timer.it_value.tv_sec = 0;
            timer.it_value.tv_usec = 500000;
            timer.it_interval.tv_sec = 0;
            timer.it_interval.tv_usec = 500000;
            setitimer(ITIMER_REAL, &timer, NULL);
            pause();
        } else {
            printf("はずれ\n");
        }
        delay(500);
    }
    return 0;
}
