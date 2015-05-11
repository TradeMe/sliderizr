/// <vs AfterBuild='build' />
'use strict';
var config 			 = require('./build/config.json');
var gulp             = require('gulp');
var generateJS       = require('./build/generate-js/generate-js-task');
var compileTemplates = require('./build/compile-templates/compile-templates-task');
var cleanCode       	= require('./build/clean/clean-task');
var concatJs        	= require('./build/concat/concat-js-task');
var concatTsd        = require('./build/concat/concat-tsd-task');
var uglify        	= require('./build/uglify/uglify-task');

var runSequence = require('run-sequence');
var server = require('gulp-express');

gulp.task('watch', ['build'], function () {
	gulp.watch(config.tsGlob, ['build']);
	gulp.watch(config.tplGlob, ['build']);
});

//gulp.task('build', function(callback)
//{
//	runSequence('clean-js', ['compile-typescript-dev', 'compile-templates', 'concat-tsd'], 'concat-js', 'uglify-js', callback);
//});

gulp.task('build', function(callback)
{
	runSequence('clean-js', ['compile-typescript', 'compile-templates', 'concat-tsd'], 'concat-js', 'uglify-js', callback);
});

gulp.task('default', ['build']);

gulp.task('server', function () {
    // Start the server at the beginning of the task 
    server.run(['demo/app.js']);
 
    // Restart the server when file changes 
    gulp.watch(['demo/**/*.html'], server.notify);
    //gulp.watch(['app/styles/**/*.scss'], ['styles:scss']);
	
    //gulp.watch(['{.tmp,app}/styles/**/*.css'], ['styles:css', server.notify]); 
    //Event object won't pass down to gulp.watch's callback if there's more than one of them. 
    //So the correct way to use server.notify is as following: 
//    gulp.watch(['{.tmp,app}/styles/**/*.css'], function(event){
//        gulp.run('styles:css');
//        server.notify(event);
//        //pipe support is added for server.notify since v0.1.5, 
//        //see https://github.com/gimm/gulp-express#servernotifyevent 
//    });
 
    //gulp.watch(['app/scripts/**/*.js'], ['jshint']);
    //gulp.watch(['app/images/**/*'], server.notify);
    //gulp.watch(['app.js', 'routes/**/*.js'], [server.run]);
});