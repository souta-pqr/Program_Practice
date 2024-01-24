async function main1() {
    const { readFile, writeFile } = await import("fs/promises");

    const fooContent = await readFile("foo.txt", "utf-8");
    await writeFile("bar.txt", fooContent + fooContent);
    console.log("書き込みが完了しました");
}

main1().then(() => {
    console.log("main1()が完了しました")
})