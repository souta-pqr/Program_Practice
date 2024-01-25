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

type Label = {
    [key: string]: string;
}

const labels: Label = {
    topTitle: "Top Title",
    bottomTitle: "Bottom Title",
    leftTitle: "Left Title",
    rightTitle: "Right Title"
}

interface Point2 {
    x: number;
    y: number;
}

function printPoint2(point: Point2) {
    console.log(point.x);
    console.log(point.y);
}

interface Point2 {
    z: number;
}

const point2: Point2 = { x: 100, y: 100, z: 100 }; // => 100, 100, 100

class MyPoint implements Point2 {
    x = 0;
    y = 0;
    z = 0;
}

interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
    color: "red",
    radius: 42
}

class Point3 {
    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    moveX(n: number): void {
        this.x += n
    }

    moveY(n: number): void {
        this.y += n
    }
}

const point = new Point3();
point.moveX(10)
console.log(`x: ${point.x}, y: ${point.y}`); // => x: 10, y: 0

class Point3D extends Point3 {
    z: number;

    constructor(x: number = 0, y: number = 0, z: number = 0) {
        super(x, y);
        this.z = z;
    }

    moveZ(n: number): void {
        this.z += n;
    }
}

const point3d = new Point3D();
point3d.moveZ(100);

console.log(`x: ${point3d.x}, y: ${point3d.y}, z: ${point3d.z}`); // => x: 0, y: 0, z: 100

interface IUser {
    name: string;
    age: number;
    sayHello: () => string;
}

class User implements IUser {
    name: string;
    age: number;

    constructor() {
        this.name = "Takuya";
        this.age = 26;
    }

    sayHello(): string {
        return "Hello, " + this.name;
    }
}

const user1 = new User();
console.log(user1.sayHello()); // => Hello, Takuya

const Direction = {
    'up': 0,
    'Down': 1,
    'Left': 2,
    'Right': 3
}

enum Direction2 {
    up,
    Down,
    Left,
    Right
}

let direction2: Direction2 = Direction2.Left
console.log(direction2); // => 2

enum Direction3 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

const value = 'DOWN'
const enumvalue = value as Direction3

if (enumvalue === Direction3.Down) {
    console.log('down')
}

class Queue<T> {
    private array: T[] = [];

    push(item: T) {
        this.array.push(item);
    }
    
    pop(): T | undefined {
        return this.array.shift();
    }
}

const queue = new Queue<number>()
queue.push(0)
queue.push(1)
// queue.push('2') // Error: Argument of type '"2"' is not assignable to parameter of type 'number'.

function printID(id: number | string) {
    console.log(id);
}

printID(1);
printID("1");

type Id = number | string;
function printId2(id: Id) {
    console.log(id);
}

type Identity = {
    id: number | string;
    name: string;
}

type Contact = {
    name: string;
    email: string;
    phone: string;
}
type IdentityOrContact = Identity | Contact;

const id: IdentityOrContact = {
    id: 1,
    name: "Takuya"
}

const contact: IdentityOrContact = {
    name: "Takuya",
    email: "",
    phone: ""
}

type Employee = Identity & Contact;

const employee: Employee = {
    id: 1,
    name: "Takuya",
    email: "",
    phone: ""
}

let postStatus: 'draft' | 'published' | 'private';
postStatus = 'draft';
// postStatus = 'draft2'; // Error: Type '"draft2"' is not assignable to type '"draft" | "published" | "private"'.

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}

function error(message: string): never {
    throw new Error(message);

    function foo(x: string | number | number[]): boolean {
        if (typeof x === "string") {
            return true;
        } else if (typeof x === "number") {
            return false;
        }
        return error("Unexhaustive!");
    }
}

enum PageType {
    ViewProfile,
    EditProfile,
    ChangePassword,
}

const getTitleText = (type: PageType) => {
    switch(type) {
        case PageType.ViewProfile:
            return "Setting"
        case PageType.EditProfile:
            return "Edit Profile"
        case PageType.ChangePassword:
            return "Change Password"
        default:
            const wrongType: never = type;
            throw new Error(`Unexhaustive case: ${wrongType}`)
    }
}

interface User1 {
    name: string;
    social?: {
        facebook: boolean
        twitter: boolean
    }
}

let user2: User1

user2 = { name: "Takuya", social: { facebook: true, twitter: false } }
console.log(user2.social?.facebook) // => true
console.log(user2.social?.twitter) // => false

user2 = { name: "Takuya" }
console.log(user2.social?.facebook) // => undefined

function processUser(user?: User) {
    let s = User!.name
}

function addOne(value: number | string) {
    if (typeof value === "string") {
        return Number(value) + 1
    }
    return value + 1
}

console.log(addOne(1)) // => 2
console.log(addOne("1")) // => 2

type User3 = {
    info?: {
        name?: string
        age: number
    }
}

let response = []
const user3 = (response as any) as User3

interface User4 {
    name: string;
    age: number;
    email: string;
}
type Userkey = keyof User4 // => "name" | "age" | "email"

const key1: Userkey = "name"
// const key2: Userkey = "name2" // Error: Type '"name2"' is not assignable to type '"name" | "age" | "email"'.

function getProperty<T, k extends keyof T>(obj: T, key: k) {
    return obj[key]
}

const user5: User4 = {
    name: "Takuya",
    age: 26,
    email: ""
}

const userName = getProperty(user5, "name")
// const userName2 = getProperty(user5, "name2") // Error: Argument of type '"name2"' is not assignable to parameter of type '"name" | "age" | "email"'.

type SupportVersions = {
    [env: number]: boolean;
}

let versions: SupportVersions = {
    102: false,
    103: true,
    104: true,
    // "105": true // Error: Type '"105"' is not assignable to type 'number'.
}

type User6 = {
    readonly name: string;
    readonly age: number;
}

let user6: User6 = { name: "Takuya", age: 26 }

// user6.name = "Yoshiki" // Error: Cannot assign to 'name' because it is a read-only property.

const x: unknown = 123;
const y: unknown = "Hello, world";

// console.log(x.toFixed(1))
// console.log(y.toFixed(1)) // Error: Object is of type 'unknown'.

if (typeof x === "number") {
    console.log(x.toFixed(1))
}

function fetchFromServer(id: string): Promise<{success: boolean}> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({success: true})
        }, 100)
    })
}

async function asyncFunc(): Promise<string> {
    const result = await fetchFromServer("some id")
    return result.success ? "success" : "failure"
}

(async () => {
    const result = await asyncFunc()
    console.log(result)
})()

asyncFunc().then(result => console.log(result))