var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var string = fs.readFileSync('./index.html');
	buf = new Buffer(256);
	len = buf.write(string, 0);
	console.log(len + " bytes: " + buf.toString('utf8', 0, len));
  	response.send(buf.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});