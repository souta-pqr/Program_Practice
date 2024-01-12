window.addEventListener('DOMContentLoaded', e => {
    const elCmnt = document.querySelector('#comment');
    const elStat = document.querySelector('#commentStatus');

    let isComposition = false;

    elCmnt.addEventListener('compositionstart', e => {
        isComposition = true;
    });

    elCmnt.addEventListener('compositionend', e => {
        isComposition = false;

        inputComment();
    });

    elCmnt.addEventListener('input', e => {
        if (isComposition) {return ;}

        inputComment();
    });

    function inputComment() {
        const txt = elCmnt.value;
        const len = [...txt].length;
        const lenMax = parseInt(elCmnt.dataset.lenmax);
        console.log(txt, len);

        const cls = len <= lenmax ? 'inputStatus' : 'inputStatus inputStatusWarn';
        const msg = `<span class="${cls}">` + ` (${len}文字 / 最大${lenMax}文字)</span>`;
        elStat.innerHTML = msg;

        saveStorageComment();
    }
});