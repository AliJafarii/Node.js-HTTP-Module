const http = require("http");
const fs = require("fs");
const dataBase = require("./user.json");
const querystring = require('querystring');


http.createServer(function(request, response) {


    if (request.url === "/" && request.method === "GET") {
        response.write(`<a href="http://localhost:3000/index.html">Cklick Here</a>`);
        response.end();

    } else if (request.url === "/index.html" && request.method === "GET") {
        fs.readFile("public7/7.html", "utf8", function(err, file) {
            if (err) {
                response.write("Somthing went wrong!!!");
                response.end();
            } else {
                response.write(file);
                response.end();
            }
        });

    } else if (request.url === "/7.js" && request.method === "GET") {
        fs.readFile("public7/7.js", "utf8", function(err, file) {
            if (err) {
                response.write("Somthing went wrong!!!");
                response.end();
            } else {
                response.write(file);
                response.end();
            }
        });

    } else if (request.url === "/7.css" && request.method === "GET") {
        fs.readFile("public7/7.css", "utf8", function(err, file) {
            response.write(file);
            response.end();
        });

    } else if (request.url === "/jquery-3.4.1.js" && request.method === "GET") {
        fs.readFile("public7/jquery-3.4.1.js", "utf8", function(err, file) {
            if (err) {
                response.write("Somthing went wrong!!!");
                response.end();
            } else {
                response.write(file);
                response.end();
            }
        });

    } else if (request.url === "/login" && request.method === "POST") {
        request.on('data', function(chunk) {
            j = -1;
            // console.log(querystring.decode(chunk.toString()).username);
            for (let i = 0; i < dataBase.length; i++) {
                if (dataBase[i].userName.includes(querystring.decode(chunk.toString()).username) && dataBase[i].password.includes(querystring.decode(chunk.toString()).password)) {
                    j = i;
                }
            }
            if (j === -1) {
                response.write("کاربری با این مشخصات وجود ندارد");
            } else {
                response.write("ورود موفقیت آمیز");
            }
            response.end();
        });
    }

}).listen(3000);

console.log("server start lisining on port 3000");