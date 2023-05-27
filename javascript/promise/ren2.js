function taskA() {
	console.log("Run taskA at" + Date.now());
}
function taskB() {
	console.log("Run taskB at" + Date.now());
}
function taskAsync() {
	console.log("Run async at" + Date.now());
}

taskA();
setTimeout(() => {
	taskAsync();
}, 1000);
taskB();
