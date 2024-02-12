class User5 {
    name: string = "";
    age: number = 0;

    isAdult(): boolean {
        return this.age >= 20;
    }
}

const uhyo3 = new User5();
console.log(uhyo3.isAdult()); // false

uhyo3.age = 21;
console.log(uhyo3.isAdult()); // true