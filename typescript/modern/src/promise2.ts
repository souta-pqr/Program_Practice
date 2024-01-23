const p1 = Promise.resolve();

p1.then(() => {
    console.log("2");
});
console.log("1");