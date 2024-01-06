const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('注文を入力してください．', (order) => {
    if (order === '') {
        console.log('またのお越しをお待ちしております．');
        rl.close();
    } else {
        rl.question(`${order}ですね．テイクアウトしますか？ (y/n)`, (takeout) => {
            if (takeout.toLowerCase() === 'y') {
                console.log(`${order}をお持ちします．`);
            } else {
                console.log(`${order}をお待ちください．`);
            }
            rl.close();
        });
    }
});