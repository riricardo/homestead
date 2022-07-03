const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Rick says: Hello World!');
})

app.listen(process.env.PROT || 3000);