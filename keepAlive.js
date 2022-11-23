var http = require('http');

http.createServer(function(req, res) {
  res.write("I'm alive");
  new Promise(r => setTimeout(r, 2000000000000000000000));
  res.end();
}).listen(8080);