var express = require('express');

var expressApp = express();
expressApp.configure(function() {
	expressApp.use(express.static(__dirname + '/public'));
});

var port = 8080;

// start the server
expressApp.listen(port);
console.log('Listening on port ' + port + '...');