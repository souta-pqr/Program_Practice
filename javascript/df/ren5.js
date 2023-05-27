function createCounter() {
	let count = 0;
	function increment() {
		count = count + 1;
		return count;
	}
	return increment;
}

const myCounter = createCounter();
myCounter();
myCounter();

const newCounter = createCounter();
newCounter();
newCounter();

console.log(myCounter());
console.log(newCounter());
