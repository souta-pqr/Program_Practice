class User3 {
    name: string;
    protected age: number 

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public isAdult(): boolean {
        return this.age >= 20;
    }
}

class PremiumUser4 extends User3 {
    public isAdult(): boolean {
        return this.age >= 10;
    }
}

const john2 = new PremiumUser4("John", 10);
const nick = new User3("Nick", 10);

console.log(john2.isAdult());
console.log(nick.isAdult());