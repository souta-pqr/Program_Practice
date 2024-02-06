type UnaryFunc = (arg: number) => number;
type BinaryFunc = (arg: number, right: number) => number;

const double: UnaryFunc = arg => arg * 2;
const add: BinaryFunc = (left, right) => left + right;

// const bin: BinaryFunc = double; // Error: Type 'UnaryFunc' is not assignable to type 'BinaryFunc'.

// console.log(bin(2, 3)); // Error: bin is not a function.