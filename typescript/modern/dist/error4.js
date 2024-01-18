"use strict";
try {
    console.log("エラーを発生させます．");
    throwError2();
    console.log("エラーを発生させました．");
}
finally {
    console.log("finallyブロックの処理");
}
console.log("プログラムを終了します．");
function throwError2() {
    throw new Error("エラーが発生しました．!!!!!!!!!");
}
