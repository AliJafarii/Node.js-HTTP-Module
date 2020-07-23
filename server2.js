const http = require("http");
const package = require("./user.json");

http.createServer(function(request, response) {
    response.write(JSON.stringify(package));
    response.end();

}).listen(3000);

console.log("server start listening on port 3000");