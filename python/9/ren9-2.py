import re

ptr = ["[012]{3}", "x[0-9A-Fa-f]{2.4}", "^[a-zA^Z_][a-zA-Z0-9_]*", "[0-9]{3}[0-9]{4}"]
str = ["113", "010", "xA", "xX1", "product", "12A_", "3330000", "106-0001"]

for valueptr in ptr:
	print("---------")
	pattern = re.compile(valueptr)
	for valuestr in str:
		res = pattern.search(valuestr)
		if res is not None:
			m = "〇"
		else:
			m = "×"
		msg = "(パターン)" + valueptr + "(文字列)" + valuestr + "(パターン)" + m

		print(msg)
