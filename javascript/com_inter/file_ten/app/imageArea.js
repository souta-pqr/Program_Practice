window.addEventListener('DOMContentLoaded', e => {
    const elImgA = document.querySelector('#imageArea');
    const elNoView = document.querySelector('#noView');
    const elFile = document.querySelector('#file');

    const canvas = document.querySelector('#view');
    const context = canvas.getContext('2d');

    elImgA.addEventListener('dragover', e => {
        e.preventDefault();
    });
    elImgA.addEventListener('dragleave', e => {
        e.preventDefault();
    });
    elImgA.addEventListener('drop', e => {
        e.preventDefault();
    });
    elImgA.addEventListener('drop', e => {
        e.preventDefault();
        uiReadImage(e.dataTransfer.files[0]);
    });
    
    elImgA.addEventListener('click', e => {
        elFile.click();
    });
    elFile.addEventListener('change', e => {
        uiReadImage(e.target.files[0]);
    });

    async function uiReadImage(file) {
        try {
            const dtURL = await uiReadImage(file);
            await drawImage(dtURL, canvas, context);
        } catch(e) {
            return;
        }

        elNoView.style.display = 'none';
        canvas.style.display = 'inline';

        canvas.setAttribute('time', Date.now());

        saveStorageCanvas();
    }

    function readImage(file) {
        return new Promise((resolve, reject) => {
            const re = /\.(png|jpg|jpeg|gif)$/i;
            if (! file.name.match(re)) {
                reject();
                return;
            }
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(file);
        });
    }

    function drawImage(url, canvas, context) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                const wC = canvas.width;
                const hC = canvas.height;
                const wI = img.width;
                const hI = img.height;

                context.drawImage(img, 0, 0, wI, hI, 0, 0, wC, hC);
                resolve();
            };
        });
    }
});