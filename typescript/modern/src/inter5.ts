import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('what is your number? :', (name1) => {
    let num = Number(name1);
    if (num % 3 === 0 && num % 5 === 0) {
        console.log('FizzBuzz')
    } else if (num % 3 === 0) {
        console.log('Fizz')
    } else if (num % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(num)
    }
    rl.close();
});