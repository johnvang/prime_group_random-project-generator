/**
 * Created by Nick on 9/23/15.
 */
var express = require('express');
var app = express();
var path = require('path');
var index = require('./routes/index');

app.use(express.static(path.join(__dirname, './public')));

var server = app.listen(3000,function(){
    var port = server.address().port;
    console.log("Listening on port: ",port);
});

console.log('before app.use');
app.use('/',index);
console.log('after app.use');

module.exports = app;