"use strict";
const person = {
	fullName: "Brecdan Eich",
	sayName: function() {
		return this.fullName;
	}
};

console.log(person.sayName());
const say = person.sayName;

//say()
