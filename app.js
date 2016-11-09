var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});

app.get('/:id', function (req, res) {
    fs.readFile(__dirname + '/' + 'name.json', function (err, data) {
       console.log(data);
       var names = JSON.parse(data);
       var name = names[req.params.id];
       res.contentType('text');
       res.end(JSON.stringify(name));
   });
});


var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
