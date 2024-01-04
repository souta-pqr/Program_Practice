const obj1 = {name: "チョコケーキ", price : 550};

console.log('keys :', Object.keys(obj1));
console.log('values :', Object.values(obj1));
console.log('entries :', Object.entries(obj1));

const obj2 = {type: "food", timing: "食後"};

const obj3 = {...obj1, ...obj2};

console.log('obj3 :', obj3);