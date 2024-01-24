const array: string[] = []
array.push("hello");
// array.push(1); // Error: Argument of type '1' is not assignable to parameter of type 'string'.

const mixedArray = [ 1, "hello", true ];
const mixedArray2: (string | number | boolean)[] = [ 1, "hello", true ];
const mixedArray3: [string, number, boolean] = [ "hello", 1, true ];

const user: { name: string; age: number } = {
    name: "takya",
    age: 26
}

console.log(user.name);
console.log(user.age);

function  printName(obj: { firstName;  lastName?: string }) {
    console.log(obj.firstName);
    console.log(obj.lastName);
}

printName({ firstName: "takuya", lastName: "yamamoto" });
printName({ firstName: "takuya" });

function sayHello(name: string, greeting?: string): string {
    return `${greeting} ${name}!`;
}

console.log(sayHello("takuya", "hello"));
console.log(sayHello("takuya"));

function printName2(firstName: string, formatter: (name: string) => string) {
    console.log(formatter(firstName));
}

function formatterName(name: string): string {
    return `${name} san`;
}

printName2("takuya", formatterName); // => takuya san

function genBirdsInfo(name: string): string[] {
    return name.split(",");
}

function signBirds(birdInfo: (x: string) => string[]): string{
    return birdInfo("hato, kiji")[0] + " piyo piyo";
}

console.log(signBirds(genBirdsInfo)); // => hato piyo piyo

const names = ["Takuya", "Yoshiki", "Taketo"];

names.forEach((name) => {
    console.log(name.toUpperCase())
})

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

type Point = {
    x: number;
    y: number;
}

function printPoint(point: Point) {
    console.log(point.x);
    console.log(point.y);
}

printPoint({ x: 100, y: 100 });