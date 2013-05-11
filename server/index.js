
var express = require('express');
var browserify = require('browserify-middleware');

var app = express();

app.use(app.router)
app.use(express.static(__dirname + '/../public'))

app.get('/js/app.js', browserify('../src/app.js'));

app.listen(3000);