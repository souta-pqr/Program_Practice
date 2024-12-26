import textwrap

# 長い文字列
long_string = "This is a very long string that I am going to use to demonstrate text wrapping."

# 指定した幅で折り返して整形
wrapped_text = textwrap.fill(long_string, width=50)

print(wrapped_text)