import { readFile } from "fs/promises";
const p2 = Promise.all([
    readFile("foo.txt", "utf8"),
    readFile("bar.txt", "utf8"),
    readFile("baz.txt", "utf8")
]);
p2.then((results) => {
    const [foo, bar, baz] = results;
    console.log("foo.txt:", foo);
    console.log("bar.txt:", bar);
    console.log("baz.txt:", baz);
});
