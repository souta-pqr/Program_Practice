type User1 = { name: string; age: number };
const getName1 = (u: User): string => {
    console.log("u is", u);
    return u.name;
};
const users1: User1[] = [
    { name: "abc", age: 10 },
    { name: "xyz", age: 20 },
];

const names1 = users1.map(getName1);
console.log("names1", names1);