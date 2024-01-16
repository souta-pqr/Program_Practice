const xRepeat1 = (num1: number) => "x".repeat(num1);

console.log(xRepeat1(5));

const g = (num2: number) => {
    for (let i = 0; i < num2; i++) {
        console.log("Hello, world!");
    }
};

g(3);