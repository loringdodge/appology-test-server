////////// Modules //////////
var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var ApiRouter = require('./api/ApiRouter');

var ServerConstants = require('./constants/ServerConstants');
var Config = ServerConstants.Config;

var server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
  extended: true
}));

server.use('*', function (res, req, next) {
  console.log(' -- USE Server --');
  next();
})

////////// Routes //////////
server.use('/api', ApiRouter);

////////// Listen //////////
server.listen(Config.PORT);

console.log('Server started with NODE_ENV="%s" on PORT="%s"', Config.NODE_ENV, Config.PORT);