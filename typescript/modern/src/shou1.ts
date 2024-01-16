type Greetable = {
    greet: (str: string) => string;
}
const obj: Greetable = {
    greet: (str) => `Hello, ${str}`
};

console.log(obj.greet('TypeScript'));