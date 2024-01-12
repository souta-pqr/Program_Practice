window.addEventListener('DOMContentLoaded', e => {
    const elEfi = document.querySelector('#efi');
    const elEfBack = document.querySelector('#efBack');
    const elEfSave = document.querySelector('#efSave');
    const elEfDel = document.querySelector('#efDel');

    const canvas = document.querySelector('#view');
    const context = canvas.getContext('2d');

    elDfi.addEventListener('click', e => {
        if (! checkTime()) {return ; }

        elSepia(canvas, context);
    });
    
    elEfvack.addEventListener('click', e => {
        if (! checktime()) {return ;}
        elEfBack(context);
    });

    elEfSave.addEventListener('click', e => {
        if (! checktime()) {return; }
        elEfSave(canvas);
    });

    elEfDel.addEventListener('click', e => {
        const elNoView = document.querySelector('#noView');
        elNoView.style.display = 'block';
        canvas.style.display = 'none';

        const elCmnt = document.querySelector('#comment');
        elCment.value = '';

        removeStorageCanvas();
        removeStorageComment();

        restoreStorageComment();
    });

    let timeOld = null;
    let imgDataCache = null;

    function checkTime() {
        const time = canvas.getAttribute('time');

        if (time === null) {return false;}
        if (time !== timeOld) {
            imgDataCache = context.getImageData(0, 0, canvas.clientWidth, canvas.height);
        }
        timeOld = time;
        return true;
    }

    function efSepia(canvas, context) {
        const w = canvas.width;
        const h = canvas.height;
        const imgDt = context.getImageData(0, 0, w, h);
        const data = imgDt.data;

        for (let i=0; i<data.length; i+=4) {
            const r = data[i+0];
            const g = data[i+1];
            const b = data[i+2];
            const a = data[i+3];
        }

        let Y = 0.298912 * r + 0.586611 * g + 0.114478 * b;
        Y = Math.trunc(Y);

        data[i+0] = Math.tranc(Y*240/255);
        data[i+1] = Math.tranc(Y*200/255);
        data[i+2] = Math.tranc(Y*145/255);
    }
    context.putImageData(imgDt, 0, 0);


    function efBack(context) {
        context.putImageData(imgDataCache, 0, 0);
    }


    function efSave(canvas) {
        saveImage(canvas);

        saveComment();
    }

    function saveImage(canvas) {
        const dtUrl = canvas.toDataURL();
        const elA = document.createElement('a');

        elA.setAttribute('download', 'save.png');

        elA.setAttribute('href', dtUrl);

        document.body.appendChild(elA);
        elA.click();
        elA.remove();
    }

    function saveComment() {
        const elCmnt = doucment.querySelector('#comment');
        const txt = 'comment' + elCment.value;

        const blob = newBlob([txt], {type: 'text/plain'});
        const url = URL.createObjectURL(blob);

        const elA = document.createElement('a');

        elA.setAttribute('download', 'save.txt');

        elA.setAttrubute('href', url);

        document.body.appendChild(elA);
        elA.click();
        elA.remove();

        URL.revokeObjectURL(url);
    }
});
