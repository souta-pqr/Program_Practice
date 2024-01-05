try {
    console.log('処理1');

    throw '文字列';

    console.log('処理2');
} catch (e) {
    console.log(e);
}

try {
    console.log('処理1');

    throw new Error('エラー');

    console.log('処理2');
} catch (e) {
    console.log(e);
}