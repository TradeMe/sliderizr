'use strict';
var config			= require('../config.json');
var gulp			= require('gulp');
var uglify			= require('gulp-uglify');
var rename			= require('gulp-rename');

gulp.task('uglify-js', function()
{
	return gulp.src(config.bin + '/*.js')
		.pipe(uglify())
		.pipe(rename({
			extname: config.outputFileMinExt
		}))
		.pipe(gulp.dest(config.bin));
});