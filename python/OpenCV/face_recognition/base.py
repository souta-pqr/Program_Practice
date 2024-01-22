import cv2
import numpy as np

# 顔検出のためのHaar Cascadeをロードします
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# 顔認識のためのLBPH (Local Binary Patterns Histograms) Face Recognizerを作成します
recognizer = cv2.face.LBPHFaceRecognizer_create()

# モデルをトレーニングします（ここでは、事前にトレーニングされたモデルをロードします）
recognizer.read('face_model.yml')

# カメラを起動します
cap = cv2.VideoCapture(0)

while True:
    # フレームを読み込みます
    ret, frame = cap.read()
    if not ret:
        break

    # グレースケールに変換します
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # 顔を検出します
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.2, minNeighbors=5)

    for (x, y, w, h) in faces:
        # 顔を認識します
        id, _ = recognizer.predict(gray[y:y+h, x:x+w])

        # 顔を四角で囲み、IDを表示します（ここでは、IDは事前にトレーニングした各顔に対応します）
        cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)
        cv2.putText(frame, str(id), (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2)

    # フレームを表示します
    cv2.imshow('Face Recognition', frame)

    # 'q'キーを押すとループから抜けます
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# カメラを解放し、ウィンドウを閉じます
cap.release()
cv2.destroyAllWindows()
