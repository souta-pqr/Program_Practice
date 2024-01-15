import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const mess = {
    good: "0以上の数値が入力されました．",
    bad: "0未満の数値が入力されました．"
}

rl.question("数値を入力して下さい：", (line) => {
    const num = Number(line);
    console.log(mess[num >= 0 ? "good" : "bad"]);
    rl.close();
})