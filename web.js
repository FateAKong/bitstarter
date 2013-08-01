#!/usr/bin/env node

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(require('fs').readFileSync('./index.html').toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
