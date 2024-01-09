console.log('処理１');

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('処理A');
        resolve();
    }, 100);
})
.then(d => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('処理B');
            resolve();
        }, 100);
    });
})
.then(d => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('処理C');
            resolve();
        }, 100);
    });
})
.then(d => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('処理D');
            resolve();
        }, 100);
    });
})
.then(d => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('処理E');
            resolve();
        }, 100);
    });
})

console.log('処理２');