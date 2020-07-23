const http = require("http");
const fs = require("fs");

http.createServer(function(request, response) {
    if (request.url === "/" && request.method === "GET") {
        response.write("http://localhost:3000/index.html");
        response.end();
    } else if (request.url === "/index.html" && request.method === "GET") {
        fs.readFile("public6/6.html", "utf8", function(err, file) {
            if (err) {
                response.write("Somthing went wrong!!!" + "\n" + " please try again later");
                response.end();
            } else {
                response.write(file);
                response.end();
            }
        });
    } else if (request.url === "/6.js" && request.method === "GET") {
        fs.readFile("public6/6.js", "utf8", function(err, file) {
            if (err) {
                response.write("Somthing went wrong!!!" + "\n" + " please try again later");
                response.end();
            } else {
                response.write(file);
                response.end();
            }
        });
    } else if (request.url === "/6.css" && request.method === "GET") {
        fs.readFile("public6/6.css", "utf8", function(err, file) {
            if (err) {
                response.write("Somthing went wrong!!!" + "\n" + " please try again later");
                response.end();
            }
            response.write(file);
            response.end();
        });
    } else {
        response.write("Not Found");
        response.end();
    };
}).listen(3000);

console.log("server start lisining on port 3000");