outer: {
    console.log('outer 前');

    inner: {
        console.log('inner 前');
        break outer;
        console.log('inner 後');
    }

    console.log('outer 後');
}

console.log('done');