import { readFile } from "fs/promises";
const sleepReject = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(reject, duration);
    });
};
const p = Promise.allSettled([
    readFile("foo.txt", "utf8"),
    sleepReject(5000)
]);
p.then((result) => {
    console.log(result);
});
