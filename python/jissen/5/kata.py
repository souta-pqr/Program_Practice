from typing import Optional

def increment(
	page_num: int,
	last: int,
	*,
	ignore_error: bool = False) -> Optional[int]:
	next_page = page_num + 1
	if next_page <= last:
		return next_page
	if ignore_error:
		return None
	raise ValueError("Invalid arguments")

print(increment.__annotations__)
