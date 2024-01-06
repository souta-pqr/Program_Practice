const re = /[\d, \-円]+/g;

const s = '借金が1280円増えました．所持金は-2,980円です．';
const iterator = s.matchAll(re);

for (const match of iterator) {
    console.log(match);
}