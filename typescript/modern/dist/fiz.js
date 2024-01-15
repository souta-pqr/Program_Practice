"use strict";
let fizzBuzzResult = "";
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzResult += "FizzBuzz ";
    }
    else if (i % 3 === 0) {
        fizzBuzzResult += "Fizz ";
    }
    else if (i % 5 === 0) {
        fizzBuzzResult += "Buzz ";
    }
    else {
        fizzBuzzResult += i + " ";
    }
}
console.log(fizzBuzzResult);
