onmessage = function(event) {
    console.log('@worker', JSON.stringify(event.data));

    const data = {msg: '返信!', arr: [4, 5, 6]};

    this.postMessage(data);
};