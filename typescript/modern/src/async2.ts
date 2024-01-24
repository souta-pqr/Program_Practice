async function get4(): Promise<number> {
    console.log("get4()が呼び出されました");
    return 4;
}

console.log("get4()を呼び出します");
const p1 = get4();
p1.then(num => {
    console.log(`num is ${num}`)
});
console.log("get4を呼び出しました")