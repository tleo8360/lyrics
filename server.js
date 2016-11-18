var express = require('express');
var app = express();
var lyrics = require('./lyrics');

app.get('/lyrics', function(req, res){
  var chosenString = lyrics[Math.floor(Math.random()*lyrics.length)];
  res.send(chosenString);
});

app.get('/api/lyrics', function(req, res){

  res.send(lyrics);
});

var server = app.listen(1234, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Server is running");
});
