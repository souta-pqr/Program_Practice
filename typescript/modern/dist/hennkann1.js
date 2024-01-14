import { createInterface } from 'readline';
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('数値を入力してください：', (line) => {
    console.log(line + 1000);
    rl.close();
});
