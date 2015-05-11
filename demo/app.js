var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = module.exports.app = exports.app = express();
 
//you won't need 'connect-livereload' if you have livereload plugin for your browser 
//app.use(require('connect-livereload')());



app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname));
app.listen(process.env.PORT || 5000);