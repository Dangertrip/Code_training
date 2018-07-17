var http = require('http');
var fs = require('fs');

http.createServer(function (req,res){
	fs.readFile('data.html',function readData(err,data){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.end(data);
		//Difference between res.send() and res.end():
		//res.end() will close the connection. res.end will not set Content-Type while res.send() will check it by itself.
	});
	
}).listen(8080,'127.0.0.1');

console.log("Server running on port 8080")
