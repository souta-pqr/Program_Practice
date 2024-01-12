window.addEventListener('DOMContentLoaded', e => {
    const elSend = document.querySelector('#send');
    const elCmnt = document.querySelector('#comment');
    const canvas = document.querySelector('#view');

    elSend.addEventListener('click', e => {
        sendData();
    });

    function sendData() {
        const comment = elCmnt.value;
        const len = [...comment].length;
        const lenMax = parseInt(elCmnt.dataset.lenmax);

        if (len > lenMax) {
            const msg = `${len}文字です．\n` + `最大文字数${lenMax}より長いです．`;
            alert(msg);
            return;
        }

        const time = canvas.getAttribute('time');
        if (time === null) {
            const msg = '画像が読み込まれていません．';
            alert(msg);
            return;
        }

        const dtUrl = canvas.toDataURL();

        const bin = atob(dtUrl.replace(/^.*,/,''));
        const buf = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) {
            buf[i] = bin.charCodeAt(i);
        }

        const blob = new Blob([buf.buffer], {type: 'image/png'});

        const formData = new FormData();
        formData.append('comment', comment);
        formData.append('image', blob);

        fetch('/post', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (! response.ok) {
                throw new Error(response);
            }

            return response.text();
        })
        .then(data => {
            console.log('Success', data);

            updataPostList();
        })
        .catch(error => {
            console.log('Error', error);
        });
    }
});