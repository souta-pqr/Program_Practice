function wait(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, 100);
    });
};

wait('処理A')
.then(d => {
    throw new Error('Oh!');
    return wait('処理B');
})
.then(d => {
    return wait('処理C');
})
.then(d => {
    return wait('処理D');
})
.catch(d => {
    return wait('処理E');
})
.finally(d => {
    return wait('処理F');
});