function countOfCodePoint(str, codePoint) {
	let count = 0;
	for (const item of str) {
		if (item === codePoint) {
		count++;
		}
	}
	return count;
}

console.log(countOfCodePoint("🍎🍇🍎🥕🍒", "🍎"));
