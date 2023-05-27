function taskA() {
	console.log("Run taskA at " + Date.now());
}
function taskB() {
	console.log("Run taskB at " + Date.now());
}
function taskAsync() {
	console.log("Run async at " + Date.now());
}

function blockTime(timeout) {
	const startTime = Date.now();
	while(true) {
		const diffTime = Date.now() - startTime;
		if(diffTime >= timeout) {
			return;
		}
	}
}

const startTime = Date.now();
taskA();
setTimeout(() => {
	const endTime = Date.now();
	taskAsync();
	console.log(`Call aysnc callback ${endTime - startTime}mmsec.`);
}, 10);
blockTime(1000);
taskB();
