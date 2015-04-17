'use strict';

var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    config = require('../gulp.config').tests;

gulp.task('tests', function () {
    return gulp.src(config.src, { read: false })
        .pipe(mocha({ reporter: config.reporter || 'spec' }));
});
