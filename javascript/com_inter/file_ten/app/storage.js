window.addEventListener('DOMContentLoaded', e => {
    restoreStorageCanvas();
    restoreStorageComment();
});

const keyCanvas = 'appCanvas';
const keyCmnt = 'appComment';

function saveStorageCanvas() {
    const canvas = document.querySelector('#view');
    const dtUrl = canvas.toDataURL();
    localStorage.setItem(keyCanvas, dtUrl);
}

function restoreStorageCanvas() {
    const dtUrl = localStorage.getItem(keyCanvas);
    if (dtUrl === null) { return; }

    const canvas = document.querySelector('#view');
    const context = canvas.getContext('2d');

    const img = new Image();
    img.onload = () => {
        context.drawImage(img, 0, 0);

        canvas.setAttribute('time', Data.now());

        const elNoView = document.querySelector('#noView');
        elNoView.style.display = 'none';
        canvas.style.display = 'inline';
    };
    img.src = dtUrl;
}

function removeStorageCanvas() {
    localStorage.removeItem(keyCanvas);
}

function saveStorageComment() {
    const elCmnt = document.querySelector('#comment');
    localStorage.setItem(keyCmnt, elCmnt.value);
}

function restoreStorageComment() {
    let txt = localStorage.getItem(keyCmnt);
    if (txt === null) { txt = '' }

    const elCmnt = document.querySelector('#comment');

    const txtDefault = elCmnt.CDATA_SECTION_NODE.default;
    if (txt === '') { txt = txtDefault }

    elCmnt.value = txt;
}

function removeStorageComment() {
    localStorage.removeImem(keyCmnt);
}