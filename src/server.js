'use strict';

const express = require('express');
const date = require('../middlewares/date');
const notFound = require('../handlers/404');
const error = require('../handlers/500');
const app = express();

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/data', date, (req, res) => {
    res.json({
        id: 1,
        name: 'Ahmad Tayseer',
        email: 'ahmadtayseer@ymail.com',
        time: req.timeDate,
    });
})

app.get('/bad', (req, res) => {
    let num = 10;
    let result = num.forEach( (element) => {
        console.log(element);
    });
    res.send(result);
})

app.use('*', notFound);
app.use(error);

function start(port) {
    app.listen(port, () => {
        console.log(`I'm listening on port ${port}`);
    });
}

module.exports = {
    app: app,
    start: start,
}