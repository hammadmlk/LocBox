var fs = require("fs");
var url = require('url');

//redirect to index.html
function home(response) {
  console.log("Request handler 'home' was called.");

  response.writeHead(302, {'Location': 'index.html'});
  response.end();  
}



//sample route handler //TODO: remove
function sample(response) {
    console.log("Request handler 'start' was called.");
    
    var body = 'sample routeHandler';
    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

exports.home = home;
exports.sample = sample;