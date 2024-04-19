var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('LAB1! Express');
});

app.listen(3535, function () {
  console.log('Lab1 listening on port 3535!');
});