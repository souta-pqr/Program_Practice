"use strict";
try {
    console.log("エラーを発生させます");
    throwError();
    console.log("エラーを発生させました．");
}
catch (error) {
    console.log("キャッチしました．");
    console.log(error);
}
console.log("プログラムを終了します．");
function throwError() {
    const error = new Error("エラーが発生しました．!!!!!!!!!");
    throw error;
}
