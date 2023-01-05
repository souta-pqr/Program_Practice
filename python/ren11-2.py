import sqlite3

conn = sqlite3.connect("data.db")

c = conn.cursor()

itr = c.execute("SELECT * FROM product WHERE num<=30")

for row in itr:
	print(row)

conn.close()
