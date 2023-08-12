const cluster = require('cluster');
const express = require("express");

if(cluster.isMaster){
    cluster.fork();
} else {
    const express = require('express');
    const app = express();

    function doWork(duration){
        const start = Date.now();
        while (Date.now() - start < duration){}
    }

    app.get('/', (req, res) => {
        doWork(5000);
        res.send("Hi there")
    });

    app.listen(8080, () => {
        console.log("Listening on port 8080")
    })
}


