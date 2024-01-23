import { readFile } from "fs/promises";
const sleepReject = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(reject, duration);
    });
};
const p = readFile("foo.txt", "utf8")
    .then(() => sleepReject(1000))
    .then((result) => {
    console.log(result);
}, () => {
    console.log("rejected");
});
