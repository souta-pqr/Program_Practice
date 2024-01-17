class User2 {
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

const uhyo1 = new User2('uhyo', 25);
const john1 = new User2("john", 17);

const boundIsAdult = uhyo1.isAdult.bind(uhyo1);

console.log(boundIsAdult()); // true
console.log(boundIsAdult.call(john1));