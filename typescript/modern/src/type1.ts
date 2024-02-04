// type User = { name: string; age: number };
// const u: User = {
//     name: "uhyo",
//     age: 26,
//     telNumber: "000-0000-0000" // Error: Property 'telNumber' does not exist on type 'User'.
// }

type User = { name: string; age: number };
const obj = {
    name: "uhyo",
    age: 26,
    telNumber: "000-0000-0000"
};
const u: User = obj; // OK