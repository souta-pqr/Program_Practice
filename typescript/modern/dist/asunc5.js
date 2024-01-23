import { readFile } from "fs/promises";
const p = readFile('foo.txt', 'utf-8');
p.then((result) => {
    console.log('成功', result);
});
p.catch((error) => {
    console.log('失敗', error);
});
p.finally(() => {
    console.log('完了');
});
