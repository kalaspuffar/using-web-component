var express = require('express');
var app = express();
var PORT = 5001;

app.use('/', express.static('public'));
app.use('/node_modules', express.static('node_modules'))
var server = app.listen(PORT);

console.log('Server started at http://localhost:' + PORT);
console.log('Serving '+__dirname + '/public');