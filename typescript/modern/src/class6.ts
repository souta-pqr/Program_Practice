class User4 {
    name: string;
    protected age: number;
    private _isAdult: boolean;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this._isAdult = age >= 20;
    }

    public isAdult(): boolean {
        return this._isAdult;
    }
}

class PremiumUser5 extends User4 {
    public setAge(newAge: number) {
        this.age = newAge;
    }
}

const john3 = new PremiumUser5("John", 20);
console.log(john3.isAdult());

john3.setAge(10);
console.log(john3.isAdult());