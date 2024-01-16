type User = { name: string; age: number };
const getName = (u: User): string => u.name;
const users: User[] = [
    { name: 'Taro', age: 10 },
    { name: 'Hanako', age: 20 },
    { name: 'Masahiro', age: 30 },
];

const names = users.map(getName);
console.log(names); // => ['Taro', 'Hanako', 'Masahiro']