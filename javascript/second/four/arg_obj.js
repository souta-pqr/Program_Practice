function myFunc(argObj) {
    argObj.price = 0;
}

let item = {name: 'コーヒー', price: 450};
myFunc(item);

console.log(item);