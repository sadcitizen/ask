'use strict';

var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    config = require('../gulp.config');

gulp.task('tests', function () {
    return gulp.src(config.tests.src, { read: false })
        .pipe(mocha({ reporter: 'spec' }));
});
