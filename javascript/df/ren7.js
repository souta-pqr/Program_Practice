const createCounter = () => {
	let privateCount = 0;
	return () => {
		privateCount++;
		return `${privateCount}time`;
	};
};
const counter = createCounter();
console.log(counter());
console.log(counter());
