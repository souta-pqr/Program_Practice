"use strict";
for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString1(i);
    console.log(message);
}
function sequence(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}
function getFizzBuzzString1(num) {
    if (num % 15 === 0) {
        return 'FizzBuzz';
    }
    else if (num % 3 === 0) {
        return 'Fizz';
    }
    else if (num % 5 === 0) {
        return 'Buzz';
    }
    else {
        return num.toString();
    }
}