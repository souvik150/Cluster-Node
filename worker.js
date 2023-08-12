const { parentPort } = require('worker_threads');

parentPort.on('message', () => {
    let counter = 0;
    while (counter < 1e10) {
        counter++;
    }

    parentPort.postMessage('' + counter);
});