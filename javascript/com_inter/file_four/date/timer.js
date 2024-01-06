const start = Date.now();
const intervalID = setInterval(() => {
    console.log(Date.now() - start, '繰り返し');
}, 100);

setTimeout(() => {
    clearInterval(intervalID);
    console.log(Date.now() - start, 'タイムアウト');
}, 1000);
