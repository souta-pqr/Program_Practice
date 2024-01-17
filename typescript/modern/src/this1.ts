// class User1 {
//     name: string;
//     #age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.#age = age;
//     }

//     public isAdult(): boolean {
//         return this.#age >= 20;
//     }
// }

// const uhyo = new User1('uhyo', 25);
// const john = new User1("john", 17);

// console.log.(uhyo.isAdult()); // true
// console.log(uhyo.isAdult.apply(john, [])); // false (thisがjohnになる)