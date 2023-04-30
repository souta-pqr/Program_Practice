import pandas as pd
df = pd.DataFrame({
	'プログラム言語' :['python', 'Ruby', 'Go', 'python', 'C#', 'C#'],
	'経験年数' : [1, 1, 2, 1, 2, 3],
	'年収' : [3000000, 2800000, 16900000, 1230000, 2000000, 9439049],
	'年齢' : [21, 22, 34, 55, 11, 8]
	})
print(df['プログラム言語'])
print(df.query('経験年数 <= 2'))
print(df.sort_index(ascending=False))
print(df.sort_values(by='年収'))
