function taskA() {
	console.log("run taskA at" + Date.now());
}
function taskB() {
	console.log("run taskB at" + Date.now());
}

function blockTime(timeout) {
	const startTime = Date.now();
	while (true) {
		const diffTime = Date.now() - startTime;
		if (diffTime >= timeout) {
			return;
		}
	}
}
taskA();
blockTime(1000);
taskB();
