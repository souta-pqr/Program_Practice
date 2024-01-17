"use strict";
class User1 {
    constructor() {
        this.name = "";
        this.age = 0;
    }
}
const obj = {
    cl: User1
};
const uhyo1 = new obj.cl();
console.log(uhyo1.age);
