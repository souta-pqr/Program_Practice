type HasAge = {
    age: number;
}

class User8 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

function getPrice(customer: HasAge) {
    if (customer instanceof User8) {
        if (customer.name === "uhyo") {
            return 0;
        }
    }
    return customer.age < 18 ? 1000: 1800;
}

const customer1: HasAge = { age: 15 };
const customer2: HasAge = { age: 40 };
const uhyo4 = new User8("uhyo", 30);

console.log(getPrice(customer1));
console.log(getPrice(customer2));
console.log(getPrice(uhyo4));