{
	const x = "outer";
	{
		const x = "inner";
		console.log(x);
	}
	console.log(x);
}
