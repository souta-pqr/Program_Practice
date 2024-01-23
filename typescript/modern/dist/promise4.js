import { readFile } from "fs/promises";
const repeat10 = (str) => new Promise((resolve) => {
    setTimeout(() => resolve(str.repeat(10)), 1000);
});
readFile("foo.txt", "utf8")
    .then(repeat10)
    .then((result) => {
    console.log(result);
});
