import time
import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)
GPIO.setup(4, GPIO.OUT)

p = GPIO.PWM(4, 50)
p.start(0.0)

# 3秒待つ
time.sleep(3.0)

# 90度回転
p.ChangeDutyCycle(7.5)  # 90度の位置
time.sleep(1.0)

# -90度回転
p.ChangeDutyCycle(2.5)  # -90度の位置
time.sleep(1.0)

# モータを停止
p.ChangeDutyCycle(0.0)

# 後処理
p.stop()
GPIO.cleanup()
