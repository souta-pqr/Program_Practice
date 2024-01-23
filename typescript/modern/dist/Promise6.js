import { readFile } from "fs/promises";
const sleepReject = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(reject, duration);
    });
};
const p = Promise.race([
    readFile("foof.txt", "utf8"),
    sleepReject(5000)
]);
p.then((result) => {
    console.log("成功:", result);
}, (error) => {
    console.log("失敗:", error);
});
