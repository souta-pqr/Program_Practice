"use strict";
class User3 {
    constructor() {
        this.name = "";
        this.age = 0;
    }
}
const obj1 = {
    cl: User3
};
const uhyo1 = new obj1.cl();
console.log(uhyo1.name); // ""
console.log(uhyo1.age); // 0
