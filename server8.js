const http = require("http");
const fs = require("fs");


http.createServer(function(request, response) {

    console.log(request.url);
    console.log(request.method);

    if (request.url === "/" && request.method === "GET") {
        response.write(`<a href="http://localhost:3000/index">Cklick Here</a>`);
        response.end();

    } else if (request.url === "/index" && request.method === "GET") {
        fs.readFile("public8/home/home.html", "utf8", function(err, file) {
            if (err) {
                response.write("Somthing went wrong!!!");
                response.end();
            } else {
                response.write(file);
                response.end();
            }
        });

    } else if (request.url === "/home.css" && request.method === "GET") {
        fs.readFile("public8/home/home.css", "utf8", function(err, file) {
            response.write(file);
            response.end();
        });

    } else if (request.url === "/about" && request.method === "GET") {
        fs.readFile("public8/about/about.html", "utf8", function(err, file) {
            if (err) {
                response.write("Somthing went wrong!!!");
                response.end();
            } else {
                response.write(file);
                response.end();
            }
        });

    } else if (request.url === "/about" && request.method === "GET") {
        fs.readFile("public8/about/about.css", "utf8", function(err, file) {
            if (err) {
                response.write("Somthing went wrong!!!");
                response.end();
            } else {
                response.write(file);
                response.end();
            }
        });

    } else if (request.url === "/img1.jpg" && request.method === "GET") {
        fs.readFile("public8/home/img1.jpg", function(err, file) {
            if (err) {
                response.write("Somthing went wrong!!!");
                response.end();
            } else {
                response.write(file);
                response.end();
            }
        });

    } else if (request.url === "/img2.jpg" && request.method === "GET") {
        fs.readFile("public8/home/img2.jpg", function(err, file) {
            if (err) {
                response.write("Somthing went wrong!!!");
                response.end();
            } else {
                response.write(file);
                response.end();
            }
        });

    } else if (request.url === "/img3.jpg" && request.method === "GET") {
        fs.readFile("public8/home/img3.jpg", function(err, file) {
            if (err) {
                response.write("Somthing went wrong!!!");
                response.end();
            } else {
                response.write(file);
                response.end();
            }
        });

    } else if (request.url === "/img4.jpg" && request.method === "GET") {
        fs.readFile("public8/home/img4.jpg", function(err, file) {
            if (err) {
                response.write("Somthing went wrong!!!");
                response.end();
            } else {
                response.write(file);
                response.end();
            }
        });

    } else if (request.url === "/img5.jpg" && request.method === "GET") {
        fs.readFile("public8/home/img5.jpg", function(err, file) {
            if (err) {
                response.write("Somthing went wrong!!!");
                response.end();
            } else {
                response.write(file);
                response.end();
            }
        });

    } else if (request.url === "/img6.jpg" && request.method === "GET") {
        fs.readFile("public8/home/img6.jpg", function(err, file) {
            if (err) {
                response.write("Somthing went wrong!!!");
                response.end();
            } else {
                response.write(file);
                response.end();
            }
        });

    }

}).listen(3000);

console.log("server start lisining on port 3000");