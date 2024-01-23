"use strict";
const p = Promise.resolve(100);
p.then((res) => {
    console.log(res);
});
