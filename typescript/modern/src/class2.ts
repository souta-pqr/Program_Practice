class User3 {
    name: string = "";
    age: number = 0;
}

const obj1 = {
    cl: User3
};

const uhyo1 = new obj1.cl();
console.log(uhyo1.name); // ""
console.log(uhyo1.age); // 0