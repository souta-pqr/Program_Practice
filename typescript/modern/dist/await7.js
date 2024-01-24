"use strict";
async function main2() {
    const { readFile, writeFile } = await import("fs/promises");
    try {
        const foocontent2 = await readFile("foo.txt", "utf-8");
        await writeFile("bar.txt", foocontent2 + foocontent2);
        console.log("書き込みが完了しました");
    }
    catch {
        console.log("エラーが発生しました");
    }
}
main2().then(() => {
    console.log("main()が完了しました");
});
