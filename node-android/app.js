
/**
 * Module dependencies.
 */
var express  = require('express');
var connect = require('connect');
var app      = express();
var port     = process.env.PORT || 8080;
// Configuration
app.use(express.static(__dirname + '/public'));
app.use(connect.logger('dev'));
app.use(connect.json());
app.use(connect.urlencoded());
// Routes

require('./routes/routes.js')(app);

var server = app.listen(port);
var io = require('socket.io').listen(server);

io.on('connection', function(socket){
  console.log("connection with socket");
});

console.log('The App runs on port ' + port);
