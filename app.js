const express = require('express');

const app = express();

app.get('/',function (req,res) {
    res.send('hello world');
});

app.listen(5000,function () {
    console.log('5000 running....')
});