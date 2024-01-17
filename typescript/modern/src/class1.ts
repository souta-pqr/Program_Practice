class User {
    name: string;
    #age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.#age = age;
    }

    public isAdult(): boolean {
        return this.#age >= 20;
    }
}

class PremiumUser extends User {
    rank: number = 1;
}

function getMessage(u: User) {
    return `こんにちは ${u.name} さん`;
}

const uhyo = new PremiumUser("uhyo", 30);
console.log(uhyo.rank);
console.log(uhyo.name);
console.log(uhyo.isAdult());

const john = new User("John", 10);
const uhyo1 = new PremiumUser('uhyo1', 32);

console.log(getMessage(john));
console.log(getMessage(uhyo1));