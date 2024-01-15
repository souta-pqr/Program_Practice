import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('数値を入力してください:', (line) => {
    const num = Number(line);
    const message = 0 <= num && num <= 100 ? `${num}は範囲内です` : `${num}は範囲外です`;
    console.log(message);
    rl.close();
});