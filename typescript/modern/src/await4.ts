const sleep2 = (duration: number) => {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, duration);
    })
};

async function get7() {
    await sleep2(1000);
    return 7;
}

async function main() {
    const num1 = await get7();
    const num2 = await get7();
    const num3 = await get7();
    return num1 + num2 + num3;
}

main().then(result => {
    console.log(`合計は${result}`)
});