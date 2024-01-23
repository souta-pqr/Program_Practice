import * as fs from 'fs';
const filePath = './uhyo.txt';
const searchString = 'uhyo';
fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
        console.error("File does not exist");
        return;
    }
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const count = (data.match(new RegExp(searchString, 'gi')) || []).length;
        console.log(count);
    });
});
