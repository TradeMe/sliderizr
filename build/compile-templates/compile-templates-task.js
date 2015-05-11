var config 			= require('../config.json');
var gulp 			 = require('gulp');
var errorHandler	= require('../errorHandler');
var angularTemplatecache = require('gulp-angular-templatecache');
var minifyHTML = require('gulp-minify-html');

gulp.task('compile-templates', function () {
    return gulp.src(config.tplGlob)
        .pipe(minifyHTML({empty: true}))
        .pipe(angularTemplatecache(
			config.templateCache.file,
			{
				"module": 'sliderizr',
				"standAlone": false,
				root: 'templates/sliderizr'
			}))
        .pipe(gulp.dest(config.tmp));

});