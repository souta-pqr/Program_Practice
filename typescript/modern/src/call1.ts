type User = { name: string; age: number };
const getName = (u: User): string => u.name;
const users: User[] = [
    {
        name: 'John',
        age: 25
    },
    {
        name: 'Jane',
        age: 24
    }
];

const names = users.map(getName);
console.log(names); // [ 'John', 'Jane' ]