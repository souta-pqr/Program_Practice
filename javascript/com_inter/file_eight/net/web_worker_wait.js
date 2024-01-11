onmessage = function(event) {
    console.log('@worker', event.data);

    for(let i = 0; i < 5000; i++) {
        const str = [...'@'.repeat(5000)].join();

        if(i % 1000 === 0) {
            console.log('@worker', i);
        }
    }

    this.postMessage('返信!');
};