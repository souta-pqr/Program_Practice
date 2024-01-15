const obj = { foo2: null };

const { foo2 = 500 } = obj;
console.log(foo2);

