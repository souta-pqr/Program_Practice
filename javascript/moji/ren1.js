const str = "ABC aiu DE eo";
const alphabetsPattern = /[a-zA-Z]+/g;
let matches;
while (matches = alphabetsPattern.exec(str)) {
	console.log(`match: ${matches[0]}, index: ${matches.index}, lastIndex: ${alphabetsPattern.lastIndex}`);
}
