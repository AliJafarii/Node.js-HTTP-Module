const http = require("http");

http.createServer(function(request, response) {
    if (request.url === "/" && request.method === "GET") {
        response.write("Hello Web Application");
        response.end();
    } else if (request.url === "/about" && request.method === "GET") {
        response.write("About Me");
        response.end();
    } else if (request.url === "/home" && request.method === "GET") {
        response.write("Wellcome To Home");
        response.end();
    } else if (request.url === "/users" && request.method === "GET") {
        response.write("Users");
        response.end();
    } else if (request.url === "/login" && request.method === "GET") {
        response.write("Please Login");
        response.end();
    } else {
        response.write("Not Found");
        response.end();
    };
}).listen(3000);

console.log("server start lisining on port 3000");