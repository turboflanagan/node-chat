var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
	fs.readFile('client.html', 'utf-8', function (error, data){
		 response.end('Hello World');
	})
});

server.listen(21000);

console.log('test');






