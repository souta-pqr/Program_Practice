const re = /([/*_]{2,})(.+?)(\1)/g;

const s = 'マークダウンでは、__強調__や**強調**、___斜体___や*斜体*、~~打ち消し~~を行うことができます。';

const rep = s.replace(re, (s, s1, s2, s3) => {
    const len = s1.length;
    let tag = [];

    if (len === 2) {
        tag = ['<strong>', '</strong>'];
    }
        
    if (len === 3) {
        tag = ['<em>', '</em>'];
    }
        return tag[0] + s2 + tag[1];
});

console.log(rep);