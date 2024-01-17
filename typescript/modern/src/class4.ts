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

class PremiumUser3 extends User2 {
    rank: number = 1;

    public override isAdult(): boolean {
        return true;
    }
}