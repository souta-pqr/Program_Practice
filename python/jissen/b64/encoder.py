#!/usr/bin/python3

import base64
import sys

def str_to_base64(x):
	"""文字列をbase64表現に変換する

	b64encode()はbytes-like objectを引数に取るため
	文字列はencode()でbyte型にして返す
	"""

	return base64.b64encode(x.encode("utf-8"))
def main():
	target = sys.argv[1]
	print(str_to_base64(target))

if __name__ == "__main__":
	main()

__all__ = ["str_to_base64"]
