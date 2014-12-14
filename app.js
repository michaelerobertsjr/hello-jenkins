var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.get('/', function (req, res) {
    res.send('hello jenkins');
});

app.listen(port, function(){
    console.log('Server is listening on port: ' + port);
});

module.exports = app;