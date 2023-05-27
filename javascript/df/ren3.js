const measureTask = (taskFn) => {
	const startTime = Date.now();
	taskFn();
	const endTime = Date.now();
	console.log(`Runtimw is ${endTime - startTime}mmsec`);
};
function doHeavyTask() {

}
measureTask(doHeavyTask);
