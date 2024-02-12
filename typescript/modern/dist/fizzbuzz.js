"use strict";
function getFizzBuzzString(num) {
    let message = '';
    if (num % 3 === 0) {
        message += 'Fizz';
    }
    if (num % 5 === 0) {
        message += 'Buzz';
    }
    if (message === '') {
        message = num.toString();
    }
    return message;
}
function sequence(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}
for (let i = 1; i <= 100; i++) {
    const message = getFizzBuzzString(i);
    console.log(message);
}
for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i);
    console.log(message);
}
