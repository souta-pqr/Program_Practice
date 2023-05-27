class Parent {
	constructor(...args) {
		console.log("parent's constructor process", ...args);
	}
}

class Child extends Parent {
	constructor(...args) {
		super(...args);
			console.log("Child's constructor process", ...args);
	}
}
const child = new Child("argument1", "argeument2");
