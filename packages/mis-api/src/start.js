const express = require('express');
const morgan = require("morgan");
const compression = require("compression");
const proxy = require('http-proxy-middleware');

var app = express();
app.use(morgan("dev"));
app.use(compression());
app.use('/', proxy({ target: 'http://localhost:8080', changeOrigin: true }));

app.listen(3000);
console.log('Listening on port: 3000');