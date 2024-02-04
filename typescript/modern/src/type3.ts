const arr1: boolean[] = [false, true];

const arr2: Array<{
    name: string;
}> = [
    { name: "山田さん" },
    { name: "鈴木さん"},
    { name: "佐藤さん"}
]

console.log(arr1);
console.log(arr2);

const arr3: number[] = [1, 2, 3];
arr3.push(4);
console.log(arr3);

const arr4: string[] = ["a", "b", "c"];
arr4.push("d");
console.log(arr4);

let tuple: [string, number, boolean] = ["a", 1, true];
tuple = ["b", 2, false];
const [a, b, c] = tuple;

console.log(a)
console.log(b)

type User1 = [name: string, age: number];
const u1: User1 = ["uhyo", 26];
console.log(u1[1]);