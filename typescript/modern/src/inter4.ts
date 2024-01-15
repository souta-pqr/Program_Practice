import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('コマンドを入力してください：', (name) => {
    switch(name) {
        case 'greet':
            console.log("こんにちは");
            break;
        case "cat":
            console.log("あなたはネコはですか？");
            console.log("にゃー");
            break;
        default:
            console.log("不明なコマンドです");
    }
    rl.close();
})