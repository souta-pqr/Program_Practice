function convertCodeUnits(str) {
	const codeUnits = [];
	for (let i=0; i<str.length; i++) {
		codeUnits.push(str.charCodeAt(i).toString(16));
	}
	return codeUnits;
}

function convertCodePoints(str) {
	return Array.from(str).map(char => {
		return char.codePointAt(0).toString(16);
	});
}

const str = "コボリ";
const codeUnits = convertCodeUnits(str);
console.log(codeUnits);
const codePoints = convertCodePoints(str);
console.log(codePoints);
