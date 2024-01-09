function wait(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, 100);
    });
};

console.log('処理１');

wait('処理A')
.then(d => {
    return wait('処理B');
})
.then(d => {
    return wait('処理C');
})
.then(d => {
    return wait('処理D');
})
.then(d => {
    return wait('処理E');
});

console.log('処理２');