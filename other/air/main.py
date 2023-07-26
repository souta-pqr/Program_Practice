#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import cv2
import numpy as np
import RPi.GPIO as GPIO
import time

# GPIO init
GPIO.setmode(GPIO.BCM)
GPIO.setup(4, GPIO.OUT)
p = GPIO.PWM(4, 50)

# Color settings
def detect(frame):
    # Change BGR color space to HSV color space
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    # Set green
    color_min = np.array([30, 50, 50])
    color_max = np.array([90, 255, 255])

    # Create the mask directly without using cv2.inRange
    mask = cv2.inRange(hsv, color_min, color_max)
    return mask

# Video Acquisition
with cv2.VideoCapture(0) as cap:
    # Filming begins
    while True:
        # Video reading
        ret, frame = cap.read()
        if not ret:
            break

        # Reduce size
        frame = cv2.resize(frame, (int(frame.shape[1]/2), int(frame.shape[1]/2)))

        # Grayscale acquisition
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # Color Detection
        mask = detect(frame)

        # Adds red to black and white video to make detection easier to see
        res = cv2.bitwise_and(gray, gray, mask=mask)

        # Extract the outline of a green object
        contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
        if len(contours) > 0:
            start_time = time.time()

        elif time.time() - start_time > 3:
            p.start(0.0)
            time.sleep(1.0)
            p.ChangeDutyCycle(7.5)
            time.sleep(1.0)
            p.ChangeDutyCycle(2.5)
            time.sleep(5.0)
            p.ChangeDutyCycle(0.0)

        # Show video
        cv2.imshow('Result', res)

        # Ends when the key is hit
        key = cv2.waitKey(1)
        if key != -1:
            break

# Clean up GPIO and release video capture
p.stop()
GPIO.cleanup()
cv2.destroyAllWindows()
