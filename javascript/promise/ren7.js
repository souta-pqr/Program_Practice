function asyncTask() {
	return Math.random() > 0.5
		? Promise.resolve("sucess")
		: Promise.reject(new Error("failure"));
}

asyncTask()
	.then(function onFullfilled(value) {
		console.log(value);
	})
	.catch(function onRejected(error) {
		console.log(error.message);
	});
