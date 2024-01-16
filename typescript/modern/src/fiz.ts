for (let i = 1; i <= 100; i++) {
    const message = getFizzBuzzString(i);
    console.log(message);
}

function getFizzBuzzString(num: number): string {
    if (num % 15 === 0) {
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return num.toString();
    }
}