const http = require("http");

http.createServer(function(request, response) {
    request.url === "/about" && request.method === "GET"
    response.write("Hello from server!");
    response.end();
    console.log(request.url);

}).listen(3000);

console.log("server start listening on port 3000");