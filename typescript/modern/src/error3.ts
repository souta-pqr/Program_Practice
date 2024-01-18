try {
    throwError1();
    console.log("これは表示されない");
} catch (error) {
    console.log(error);
}

function throwError1() {
    const error = new Error("エラーが発生しました．!!!!!!!!!");
    throw error;
    console.log("これは表示されない")
}