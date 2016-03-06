## Real time web with *Node.js*

Google v8 runtime

What can we build

* websocket server .
* Fast File upload Client .
* Ad Server .
* Any Real-Time Data Apps .


Multi-threaded

Blocking code
Non-blocking code

_Blocking code example_

```javascript
var contents = fs.readFileSync('/etc/hosts');
console.log(contents);
console.log('Doing something else');
```
 _Non-blocking code example_

```javascript
fs.readFile('/etc/hosts', function(err,contents){
    console.log(console);
});
console.log("Doing something else");
```


# **Events**

Many objects in Node emit Events

EventEmitter class

Custom event EventEmitter

```javascript
var EventEmitter = require('events').EventEmitter;

var logger = new EventEmitter();
logger.on('error', function(message){
    console.log('ERR:' + message);
})

logger.emit('error', 'Spilled Milk');
```
We can add multiple event listeners on the same event .


** Streams**
Channels for data FLow

* Readable Streams
* Writable Streams

Request Object is a Readable Stream of EventEmitter class

```javascript
http.createServer(function(request, response){
    response.writeHead(200);
    request.on('readable', function(){
        var chunk = null;
        while(null !== (chunk = request.read())){
            console.log(chunk.toString());
        }
    });
    request.on('end', function(){
        response.end();
    });
}).listen(8080);

```

```javascript
http.createServer(function(request, response){
    response.writeHead(200);
    response.pipe(response);
}).listen(8080);

```
_Examples Streams_

```javascript
var fs = require('fs');

var file = fs.createReadStream("readme.md");
var newFile = fs.createWriteStream("readme_copy.md");
file.pipe(newFile);
```


File uploads correctly


```javascript
http.createServer(function(request, response){
    var newFile = fs.createWriteStream("readme_copy.md");
    var fileBytes = request.headers['content-length'];
    var uploadedBytes = 0 ;
    request.on('readable', function(){
        var chunk = null;
        while (null !== (chunk = request.read())) {
            uploadedBytes += chunk.length;
            var progress = (uploadedBytes / fileBytes)*100;
            response.write("progress: "+ parseInt(progress, 10)+ "%\n") ;
        }
    });
    request.pipe(newFile);
}).listen(8080);
```
**4. Modules**

```javascript
var http = require('http'); //http.js
var fs = require('fs');    // fs.js
```

creating our own module

create a file custom_hello.js with contents below :

```javascript
var hello = function(){
    console.log("Hello");
}
module.exports = hello ;
```
another way yo add more functions

```javascript
exports.goodbye = function(){
    console.log("bye !");
}
exports.newOne = function(){
    console.log("this is a new one ! ");
}
 output :
 hello !
bye !
this is a new one !
```

the method can be called once

```javascript
require('./custom_bye').goodbye();
```
