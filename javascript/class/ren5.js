class Myclass {
	publicField = 1;
	constructor(arg) {
		this.property = arg;
	}
}
const myclass = new Myclass(2);
console.log(myclass.publicField);
console.log(myclass.property);
