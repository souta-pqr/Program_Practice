const p = new Promise<number>((resolve) => {
    setTimeout(() => {
        resolve(123);
    }, 3000);
})

p.then((num) => {
    console.log(`結果は${num}`);
})