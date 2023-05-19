import re
import os
import time
import numpy as np
from keras.models import Sequential
from keras.layers import Dense, LSTM
from keras.callbacks import LambdaCallback

# ERROR"gahasseisitabaainoshori"
os.environ['KMP_DUPLICATE_LIB_OK']='TRUE'

# jikannwohakaru"
start = time.time()

# "oshaberihime"toiu"text"wohiraku"
with open("ningen_shikkaku.txt", mode="r", encoding="shift-jis") as f:  # ファイルの読み込み
    text_original = f.read()


# "sub""method"wotukattenotikann(sakujo)
text = re.sub("《[^》]+》", "", text_original) # ルビの削除
text = re.sub("［[^］]+］", "", text) # 読みの注意の削除
text = re.sub("[｜ 　]", "", text) # | と全角半角スペースの削除
print("文字数", len(text))  # len() で文字列の文字数も取得可能

n_rnn = 10  # 時系列の数
batch_size = 128
epochs = 20  #epochsは、多いほど、精密に学習するが、重くなるため今回は小さくしている
n_mid = 256  # 中間層のニューロン数

# インデックスと文字で辞書を作成
chars = sorted(list(set(text)))  # setで文字の重複をなくし、各文字をリストに格納する
# print("文字数（重複無し）", len(chars))
char_indices = {}  # 文字がキーでインデックスが値
for i, char in enumerate(chars):
    char_indices[char] = i
indices_char = {}  # インデックスがキーで文字が値
for i, char in enumerate(chars):
    indices_char[i] = char
 
# 時系列データと、それから予測すべき文字を取り出す
time_chars = []
next_chars = []
for i in range(0, len(text) - n_rnn):
    time_chars.append(text[i: i + n_rnn])
    next_chars.append(text[i + n_rnn])
 
# 入力と正解をone-hot表現で表す。１文字毎に0,1のベクトルをフルイメージです。
x = np.zeros((len(time_chars), n_rnn, len(chars)), dtype=bool)
t = np.zeros((len(time_chars), len(chars)), dtype=bool)
for i, t_cs in enumerate(time_chars):
    t[i, char_indices[next_chars[i]]] = 1  # 正解をone-hot表現で表す
    for j, char in enumerate(t_cs):
        x[i, j, char_indices[char]] = 1  # 入力をone-hot表現で表す

# print("xの形状", x.shape)
# print("tの形状", t.shape)

# ----LSTM model koutiku----
model_lstm = Sequential()
model_lstm.add(LSTM(n_mid, input_shape=(n_rnn, len(chars))))
model_lstm.add(Dense(len(chars), activation="sigmoid")) # "activation=sigmoid"nisitesaigomadeyaru
model_lstm.compile(loss='categorical_crossentropy', optimizer="adam")
print(model_lstm.summary())

# ----mojiseisei----

def on_epoch_end(epoch, logs):
    print("エポック: ", epoch)

    elapsed_time = time.time() - start
    print ("on_epoch_end  elapsed_time:{0}".format(elapsed_time) + "[sec]")
    
    beta = 4  # 確率分布を調整する定数
    prev_text = text[0:n_rnn]  # 入力に使う文字
    created_text = prev_text  # 生成されるテキスト
    
    print("シード: ", created_text)

    for i in range(500):
        # 入力をone-hot表現に
        x_pred = np.zeros((1, n_rnn, len(chars)))
        for j, char in enumerate(prev_text):
            x_pred[0, j, char_indices[char]] = 1
        
        # 予測を行い、次の文字を得る
        # yの形状は、1列 1049行(文字数=出力層の数)になっている
        y = model.predict(x_pred)
        #print(y.shape )
        p_power = y[0] ** beta  # 確率分布の調整(1049個の配列の中から、確率が高い文字を取得しようとしている　)
        next_index = np.random.choice(len(p_power), p=p_power/np.sum(p_power))        
        next_char = indices_char[next_index]

        created_text += next_char
        prev_text = prev_text[1:] + next_char

    print(created_text)
    print()
    


# エポック終了後に実行される関数を設定
epock_end_callback= LambdaCallback(on_epoch_end=on_epoch_end)


# ----gakushuu----
model = model_lstm

elapsed_time = time.time() - start
print ("学習開始 elapsed_time:{0}".format(elapsed_time) + "[sec]")
history_lstm = model_lstm.fit(x, t,
                    batch_size=batch_size,
                    epochs=epochs,
                    callbacks=[epock_end_callback])
