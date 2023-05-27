class Counter {
	count = 0;
	up = this.increment;
	increment() {
		this.count++;
	}
}
const counter = new Counter();
counter.up();
console.log(counter.count);
