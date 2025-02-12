import random
import string

random_float = random.random
print(random_float)

# 1から10までのランダムな整数を出力
random_int = random.randint(1, 10)
print(random_int)

# 文字列からランダムに一文字を選ぶ
random_char = random.choice(string.ascii_letters)
print(random_char)

# リストをランダムにシャッフル
lst = [1, 2, 3, 4, 5]
random.shuffle(lst)
print(lst)

# リストから2つのランダムな要素を選択（重複なし）
random_sample = random.sample(lst, 2)
print(random_sample)

# 1.0以上5.0未満のランダムな浮動小数点数を生成
random_uniform = random.uniform(1.0, 5.0)
print(random_uniform)