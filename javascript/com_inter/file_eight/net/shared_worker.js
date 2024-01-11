let cnt = 0;

onconnect = function(event) {
    const port = event.ports[0];

    port.onmessage = function(event) {
        console.log('@worker', event.data);
        port.postMessage(`返信! ${++cnt}`);
    };
};