//require http node (prebuilt web server)
var http = require('http');

// launch http server and response asynchronously (non-blocking)
http.createServer(function(request, response){
    response.writeHead(200); //status ok (works)
    response.end('First node page'); //prints
}).listen(3000); //port 

console.log('Server is running on port 3000');