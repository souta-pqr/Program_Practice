function wait(msg, isOk = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(msg);
            if (isOk) {
                resolve();
            } else {
                reject();
            }
        }, 100);
    });
};

wait('処理A', false)
.then(() => {
    return wait('処理B 成功');
}, d => {
    return wait('処理B 失敗');
})
.then(d => {
    return wait('処理C 成功', false);
})
.then(d => {
    return wait("処理D 成功");
})
.then(d => {
    return wait("処理E 成功");
})
.catch(d => {
    return wait("処理E 失敗");
})
.finally(d => {
    return wait('処理G 終了');
});
