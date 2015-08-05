var config			= require('../config.json');
var gulp             = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat-js', function(){
    return gulp.src(
        [
            config.tmp + '/sliderizr.module.js',
            config.tmp + '/' + config.templateCache.file,
            config.tmp + '/providers/*.js',
            config.tmp + '/services/*.js',
            config.tmp + '/models/*.js',
            config.tmp + '/directives/*.js'
        ])
        .pipe(concat(config.outputFile))
        .pipe(gulp.dest('demo/app/'))
        .pipe(gulp.dest(config.bin));
});