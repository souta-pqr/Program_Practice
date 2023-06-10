function delay(timeoutMs) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, timeoutMs);
	});
}
delay(10).then(() => {
	console.log("Call after 10mmsec");
});
