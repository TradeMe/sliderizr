var config = require('../config.json');
var gulp   = require('gulp');
var del    = require('del');
var log    = require('../logger.js');

gulp.task('clean-js', function (done) {
	
	del([config.bin + '/*.js', config.tmp], done);
});