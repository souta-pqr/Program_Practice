function process(callback) {
    console.log('処理を開始します．．．');
    callback();
    console.log("処理が完了しました．");
}

process(function() {
    console.log("コールバック関数が呼び出されました．")
});