'use strict';
var gulp            = require('gulp');
var tslint          = require('gulp-tslint');
var ignore          = require('gulp-ignore');
var tsCompiler 		= require('gulp-typescript');
var sourcemaps 		= require('gulp-sourcemaps');
var ngAnnotate 		= require('gulp-ng-annotate');
var config 			= require('../config.json');
var errorHandler    = require('../errorHandler');
var log             = require('../logger.js');
var _               = require('lodash');
var merge			= require('merge-stream');

var tsProject = tsCompiler.createProject({
	declarationFiles: true,
	noExternalResolve: true,
	//module: 'amd',
	target: 'es5',
	removeComments: false,
	//sourceRoot: '.',
	noImplicitAny: false
	//out: 'sldrzr'
});

var typescriptLintReporter = function (output, file, options) {
	_.each(output, function (lint) {
		var message = 'Problem at [' + lint.startPosition.line + ', ' + lint.startPosition.character + '] in ' + lint.name + ' (' + lint.failure + ')';
		errorHandler()({ message: message });
	});
};

function typescriptCompileReporter() {
	return {
		error: function () { }
	}
}

gulp.task('typescript-lint', function typescriptLint(reportTaskDone) {

	return gulp.src(config.tsGlob)
		.pipe(ignore.exclude(function (file) {
			return file.path.match(/\.d\.ts$/);
		}))
		.pipe(tslint({
			configuration: require('../../TradeMe.PropertyAgentPortal.Web/tslint.json')
		}))
		.pipe(tslint.report(typescriptLintReporter, {
			emitError: false
		}))
		.on('error', errorHandler(reportTaskDone));
});

gulp.task('compile-typescript-dev', ['typescript-lint'], function () {
	return gulp.src([config.tsGlob, config.typingsGlob])
		.pipe(sourcemaps.init())
		.pipe(tsCompiler(tsProject, undefined, typescriptCompileReporter))
		.on('error', function(e) {
			this.emit('end');
			errorHandler()(e);
		})
		.js
		.pipe(ngAnnotate({ gulpWarnings: false }))
		.pipe(sourcemaps.write({sourceRoot: '/app'}))
		.pipe(gulp.dest(config.tmp));
});

gulp.task('compile-typescript', function () {
	var result = gulp.src([config.tsGlob, config.typingsGlob])
		.pipe(tsCompiler(tsProject));

	return result.js
		.pipe(ngAnnotate({gulpWarnings:false}))
		.pipe(gulp.dest(config.tmp));
});