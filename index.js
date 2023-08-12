const crypto = require('crypto');

const express = require('express');
const app = express();

function doWork(duration){
    const start = Date.now();
    while (Date.now() - start < duration){}
}

app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        res.send("Hi there")
    })

});

app.get('/fast', (req, res) => {
    res.send("This was fast");
});

app.listen(8080, () => {
    console.log("Listening on port 8080")
})
