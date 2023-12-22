from pydub import AudioSegment

# 音声ファイルを読み込む
audio = AudioSegment.from_file("/home/souta-pqr/pheno/wav/1205_zundamon/1205_zundamon/wav/RECITATION324_082.wav", format="wav")

# 音声の長さを取得し、ミリ秒単位で表示する
length_ms = len(audio)
print(f"音声の長さ: {length_ms} ミリ秒")
