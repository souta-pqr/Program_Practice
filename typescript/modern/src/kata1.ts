const xRepeat = (num: number): string => "x".repeat(num);

console.log(xRepeat(3)); // xxx

type F = (repeatNum: number) => string;

const xRepeat1: F = (num: number): string => "x".repeat(num);