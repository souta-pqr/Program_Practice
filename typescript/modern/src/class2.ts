class User1 {
    name: string = "";
    age: number = 0;
}

const obj = {
    cl: User1
};

const uhyo1 = new obj.cl();
console.log(uhyo1.age);