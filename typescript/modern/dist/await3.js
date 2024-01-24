"use strict";
const sleep1 = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};
async function get6() {
    console.log("get6()が呼び出されました");
    await sleep1(1000);
    console.log("awaitの次に進みました");
    return 6;
}
console.log("get6()を呼び出します");
const p4 = get6();
p4.then(num => {
    console.log(`num is ${num}`);
});
console.log("get6を呼び出しました");
