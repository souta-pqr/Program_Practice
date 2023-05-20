function addPrefix(text, prefix) {
	const pre = typeof prefix === "string" ? prefix : "デフォルト:";
	return pre + text;
}

console.log(addPrefix("文字列"));
console.log(addPrefix("文字列", "カスタム:"));
