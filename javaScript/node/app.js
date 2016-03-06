var hello = require('./hello')
var gb = require('./custom_bye.js')
var myMod = require('./my_module');
var makeRequest = require('./make_request');

hello();
gb.goodbye();
gb.newOne();
myMod.foo();
myMod.bar();
makeRequest("hello madc !");

