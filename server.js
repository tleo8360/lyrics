var http = require('http');
var lyrics = require('./lyrics');

http.createServer(function(request, response) {
  var chosenString = lyrics[Math.floor(Math.random()*lyrics.length)];

  response.writeHead(200, { "Content-type": "text/plain" });
  response.write(chosenString);
  response.end();
}).listen(1234);
