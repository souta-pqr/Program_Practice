const person = {
	fullName: "Breccdan Eich",
	sayName: function() {
		return this.fullName;
	}
};

console.log(person.sayName());
