const obj1 = {name: 'チョコケーキ', price: 550};

const obj2 = obj1;

obj2.name = 'プリン';

console.log(obj1);

obj1.name = 'チョコケーキ'; 

console.log(obj2);