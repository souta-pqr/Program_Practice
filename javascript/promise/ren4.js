setTimeout(() => {
	try {
		throw new Error("Error");
	}
	catch(error) {
		console.log("catch error");
	}
}, 10);
console.log("run this line");
