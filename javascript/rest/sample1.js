try {
	throw new AggregateError([
		new Error("some error"),
	], 'Hello');
}
catch (e) {
	console.log(e instanceof AggregateError);
	console.log(e.message);
	console.log(e.name);
	console.log(e.errors);
}
