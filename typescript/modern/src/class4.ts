class User4 {
    name: string = "";
    age: number = 0;

    isAdult(): boolean {
        return this.age >= 20;
    }

    setAge(newAge: number) {
        this.age = newAge;
    }
}

const uhyo4 = new User4();
const baby = new User4();
console.log(uhyo4.isAdult());

uhyo4.setAge(26);
console.log(uhyo4.isAdult());

console.log(baby.isAdult());