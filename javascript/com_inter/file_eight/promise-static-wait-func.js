function p(tm, isResolve=true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(tm, isResolve ? 'resolve' : 'reject');

            if (isResolve) {
                resolve(`${tm}:ok`);
            } else {
                reject(`${tm}: err`);
            }
        }, tm);
    });
};