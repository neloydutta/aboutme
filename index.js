var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/fornow.html');
});

app.listen(port, function () {
    console.log("listening to port: " + port);
});