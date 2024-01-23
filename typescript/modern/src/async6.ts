const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, duration);
    })
}

sleep(3000).then(() => {
    console.log("3秒経過しました");
});