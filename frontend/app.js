let express = require("express");
const https = require("https");
let server = express();
let fs = require("fs-extra");
var privateKey = fs.readFileSync("public/key/example.key", "utf-8");
var certificate = fs.readFileSync("public/key/example.csr", "utf-8");
var credentials = { key: privateKey, cert: certificate };

server.use("/", express.static("public"));

server.get("/", (req, res) => {
    res.sendFile('index.html'); });

https.createServer(credentials, server).listen(3000);