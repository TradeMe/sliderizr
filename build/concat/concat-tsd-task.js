var config			= require('../config.json');
var gulp             = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat-tsd', function(){
    return gulp.src([config.definitionsGlob, 'src/sliderizr/models/PanelSize.ts'])
        .pipe(concat(config.definitionsOutput))
        .pipe(gulp.dest(config.bin));
});