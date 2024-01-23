import { readFile  } from "fs/promises";

const p3 = Promise.race([
    readFile("foo.txt", "utf8"),
    readFile("bar.txt", "utf8"),
    readFile("baz.txt", "utf8")
]);

p3.then((result) => {
    console.log(result);
});