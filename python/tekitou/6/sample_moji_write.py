import speech_recognition as sr

# 音声認識オブジェクトを作成
r = sr.Recognizer()

# 音声ファイルを開く
with sr.AudioFile('/home/souta-pqr/pheno/wav/1205_zundamon/1205_zundamon/wav/RECITATION324_082.wav') as source:
    # 音声を読み込む
    audio_data = r.record(source)
    # 音声をテキストに変換する
    text = r.recognize_google(audio_data, language='ja-JP')
    print(text)
