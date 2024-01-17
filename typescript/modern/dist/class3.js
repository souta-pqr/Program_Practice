"use strict";
class PremiumUser2 extends User {
    constructor(name, age, rank) {
        super(name, age);
        this.rank = rank;
    }
}
const uhyo3 = new PremiumUser2("uhyo", 30, 2);
console.log(uhyo3.name);
console.log(uhyo3.isAdult());
console.log(uhyo3.rank);
