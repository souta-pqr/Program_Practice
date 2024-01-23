import { read } from "fs";
import { readFile } from "fs/promises";

const repeat10 = (str: string) =>
    new Promise<string>((resolve) => {
        setTimeout(
            () => resolve(str.repeat(10)),
            1000
        );
    });

readFile("foo.txt", "utf8")
    .then(repeat10)
    .then((result) => {
        console.log(result);
    });