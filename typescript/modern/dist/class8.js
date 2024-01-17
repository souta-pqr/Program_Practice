"use strict";
class User8 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function getPrice(customer) {
    if (customer instanceof User8) {
        if (customer.name === "uhyo") {
            return 0;
        }
    }
    return customer.age < 18 ? 1000 : 1800;
}
const customer1 = { age: 15 };
const customer2 = { age: 40 };
const uhyo4 = new User8("uhyo", 30);
console.log(getPrice(customer1));
console.log(getPrice(customer2));
console.log(getPrice(uhyo4));
