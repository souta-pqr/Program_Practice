class Parent {
	constructor() {
		this.name = "Parent";
	}
}
class Child extends Parent {
	constructor() {
		super();
		this.name = "Child";
	}
}
const parent = new Parent();
console.log(parent.name);
const child = new Child();
console.log(child.name);
