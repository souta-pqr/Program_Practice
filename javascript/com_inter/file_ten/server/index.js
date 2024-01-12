const dirImages = 'upload_images';
const filePostDat = 'post-dat.txt';

const fs = require('fs');
const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({dest: dirImages})

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use('/app', express.static(__dirname + '/../app'));
app.use('/upload_images', express.static(__dirname + '/upload_images'));

app.post('/post', upload.any(), (req, res) => {
    console.log(req.body);
    console.log(req.files);

    const objSave = {
        comment: req.body.comment,
        dir: dirImages ,
        image: req.files[0].filename,
        date: Date.now()
    };
    const txtSave = JSON.stringify(objSave) + '\n';
    console.log(txtSave);

    fs.appendFile(filePostDat, txtSave, err => {
        console.log(err);
    });

    const resObj = {
        message: 'Received POST Data',
        status: 'success'
    };
    res.send(JSON.stringify(resObj));
});

app.get('/get', (req, res) => {
    fs.readFile(filePostDat, 'utf-8', (err, data) => {
        data = data.trim().replace(/\r/g, '');
        const arr = data.split('\n');
        arr.reverse();

        const txt = '{"list": [' + arr.join(',') + ']}';

        res.type('json');
        res.send(txt);
    });
});

const port = 3000;
app.listen(3000, () => console.log('start server'));