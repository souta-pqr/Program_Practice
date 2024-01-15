const foo = { obj: { num: 1234 } };
const bar = {...foo };
bar.obj.num = 5678;
console.log(foo.obj.num); // Output: 5678