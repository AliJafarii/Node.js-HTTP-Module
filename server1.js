const http = require("http");

http.createServer(function(request, response) {
    response.write("<h1> Hello Web Application </h1>");
    response.end();
}).listen(3000);

console.log("server start listening on port 3000");