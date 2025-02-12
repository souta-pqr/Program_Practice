import string
import random

# ランダムな英字のみの文字列を生成
random_string = ''.join(random.choice(string.ascii_letters) for _ in range(10))
print (random_string) # 生成された文字列を表示