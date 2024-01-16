type User2 = {name: string; age: number};
const users2: User2[] = [
    {name: "abc", age: 10},
    {name: "xyz", age: 20},
];

const names2 = users2.map((u: User2): string => u.name);
console.log(names2);