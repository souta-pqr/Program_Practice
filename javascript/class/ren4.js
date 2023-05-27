class NumberWrapper {
	constructor(value) {
		this._value = value;
	}

	get value() {
		console.log("getter");
		return this._value;
	}

	set value(newValue) {
		console.log("setter");
		this._value = newValue;
	}
}

const numberWrapper = new NumberWrapper(1);
console.log(numberWrapper.value);
numberWrapper.value = 42;
console.log(numberWrapper.value);
