import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('文字列を入力して下さい。', (answer) => {
    console.log(answer);
    rl.close();
});