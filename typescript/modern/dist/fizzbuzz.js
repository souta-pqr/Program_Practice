"use strict";
function fizzbuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return 'FizzBuzz';
    }
    else if (n % 3 === 0) {
        return 'Fizz';
    }
    else if (n % 5 === 0) {
        return 'Buzz';
    }
    else {
        return n.toString();
    }
}
let output = '';
for (let i = 1; i <= 100; i++) {
    output += fizzbuzz(i) + ' ';
}
console.log(output.trim());
