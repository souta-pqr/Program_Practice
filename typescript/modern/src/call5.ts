type User3 = {name: string; age: number};
const users3: User3[] = [
    {name: "abc", age: 10},
    {name: "xyz", age: 20},
];

const adultUsers = users3.filter((u: User3) => u.age >= 18);
const AllAdult = users3.every((u: User3): boolean => u.age >= 18);
const seniorExists = users3.some((u: User3): boolean => u.age >= 60);
const abc = users3.find((u: User3): boolean => u.name === "abc");

console.log(adultUsers);
console.log(AllAdult);
console.log(seniorExists);
console.log(abc);