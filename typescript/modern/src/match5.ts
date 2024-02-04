const str = "Hello, world!";
console.log(str.length);

type HasLength = { length: number };
const obj5: HasLength = "foober";

console.log(obj5.length);