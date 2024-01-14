let person = {
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
}

let person1 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(person.fullName.call(person1)); // Will return "John Doe"