var express = require('express');
var morgan = require('morgan');

var app = module.exports.app = exports.app = express();
app.use(morgan('dev'));
app.use('/', express.static("" + __dirname));
app.listen(process.env.PORT || 5000);