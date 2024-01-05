outer:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i, j, '前')

        if (i === 1 && j === 1) {
            break outer;
        }
        console.log(i, j, '後')
    }
}

console.log('done')