"use strict";
const p = new Promise((resolve) => {
    setTimeout(() => {
        resolve(123);
    }, 3000);
});
p.then((num) => {
    console.log(`結果は${num}`);
});
