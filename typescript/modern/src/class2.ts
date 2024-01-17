class User1 {
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

class PremiumUser1 extends User1 {
    rank: number = 1;

    public isAdult(): boolean {
        return true;
    }
}

const john1 = new User1("John", 10);
const uhyo2 = new PremiumUser1("uhyo", 10);

console.log(john1.isAdult());
console.log(uhyo2.isAdult());