const start = Date.now();

for (let i = 0; i < 5000; i++) {
    const str1 = '@'.repeat(5000);
    const arr = [...str1];
    const str2 = arr.join('');
}

const end = Date.now();

const diff = end - start;
console.log(`開始${start} 終了${end} 差分${diff}ミリ秒`);