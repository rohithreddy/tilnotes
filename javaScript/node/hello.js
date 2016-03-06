// var http = require('http');
//
// http.createServer(function(request, response,err){
//     response.writeHead(200);
//     response.write("Hello this is dog \n");
//     response.end();
// }).listen(9090);
// console.log("Listening on port 9090...");
//
// var fs = require('fs');
// var http = require('http');
//
// http.createServer(function(request, response){
//     var newFile = fs.createWriteStream('readme_copy.md');
//     request.pipe(newFile);
//     request.on('end', function(){
//         request.end('uploaded');
//     });
// }).listen(8080);

var hello =  function(){
    console.log("hello !");
}

module.exports = hello ;
