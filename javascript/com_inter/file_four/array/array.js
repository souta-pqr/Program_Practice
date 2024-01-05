const arr = [1, 2, [3, 4], [[5, 6, [7, 8]]]];

console.log(arr);
console.log(arr.flat());
console.log(arr.flat(2));
console.log(arr.flat(Infinity));
console.log(arr);