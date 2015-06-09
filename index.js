var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");


// function requestHandlers.XXX is called for each handle[/XXX]. where /XXX is the uri
// all files in static folder are automatically mapped. See router.js

var handle = {}     

handle["/"] = requestHandlers.home;
handle["/home"] = requestHandlers.home;
handle["/sample"] = requestHandlers.sample;

server.start(router.route, handle);
