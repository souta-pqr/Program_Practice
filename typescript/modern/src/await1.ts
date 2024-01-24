const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, duration);
    })
}

async function get5() {
    await sleep(1000);
    return 5;
}

const p3 = get5();
p3.then(num => {
    console.log(`num is ${num}`);
});