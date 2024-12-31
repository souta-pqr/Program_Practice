import codecs

text = "こんにちは、世界！"
encoded_text = codecs.encode(text, 'utf-8')
print(encoded_text)
# 出力：
b'\xe3\x81\x93\xe3\x82\x93\xe3\x81\xab\xe3\x81\xa1\xe3\x81\xaf\xe3\x80\x81\xe4\xb8\x96\xe7\x95\x8c\xef\xbc\x81'

decoded_text = codecs.decode(encoded_text, 'utf-8')
print(decoded_text)
# 出力:こんにちは，世界！
