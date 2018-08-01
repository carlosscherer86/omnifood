const path = require('path');
const express = require('express');
const http = require('http');
const port = process.env.PORT || 3000
const publicPath  = path.join(__dirname);
var app = express();
var server = http.createServer(app);

app.use(express.static(publicPath));

server.listen(port, () => {
    console.log("Server is up o port 3000");
})