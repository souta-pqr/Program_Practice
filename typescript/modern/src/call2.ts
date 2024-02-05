type User1 = { name: string; age: number };
const getName1 = (u: User1): string => {
    console.log("u is ", u);
    return u.name;
}
const users1: User1[] = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 24 }
];

const names1 = users1.map(getName1);
console.log(names1); // [ 'John', 'Jane' ]