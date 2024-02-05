function foo(): void {}
const bar = (): void => {};

console.log(foo.name); // foo
console.log(bar.name); // bar