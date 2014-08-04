var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var move = function() { return 'Not yet loaded'; };
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/', function(req, res) {
  console.log('HERE');
  res.send(move(req.body));
});

app.post('/heroFilesHere', multer({ 
  dest: './',
  rename: function() {
    return 'hero';
  }
}), function(req, res) {
  move = require('./hero.js');
  res.send('File saved...probably');
});

app.listen(8080);