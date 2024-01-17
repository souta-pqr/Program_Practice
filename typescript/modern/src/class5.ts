class User5 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    iidAdult(): boolean {
        return this.age >= 20;
    }
}

const uhyo5 = new User5('uhyo', 26);
console.log(uhyo5.iidAdult());
console.log(uhyo5.name);

