const arr = [10, 20, 30, 40];

console.log(' - reduce1 -');
const sum1 = arr.reduce((a, b, i) => {
    console.log(`a=${a}, b=${b}, i=${i}`);
    return a + b;
});
console.log(sum1); // 100

console.log(' - reduce2 -');
const sum2 = arr.reduce((a, b, i) => {
    console.log(`a=${a}, b=${b}, i=${i}`);
    return a + b;
}, 1000);

console.log(sum2); // 1100

const sum = arr.reduceRight((a, b, i) => {
    console.log(`a=${a}, b=${b}, i=${i}`);
    return a + b;
}, 0);

console.log(sum); // 100