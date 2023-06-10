Promise.resolve(1).then((value) => {
	console.log(value);
	return value * 2;
}).then(value => {
	console.log(value);
	return value * 2;
}).then(value => {
	console.log(value);
}).then(value => {
	console.log(value);
});
