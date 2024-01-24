import { readFile, writeFile } from "fs/promises";

const fooContent1 = await readFile("foo.txt", "utf-8");
await writeFile("bar.txt", fooContent1 + fooContent1);
console.log("書き込みが完了しました");