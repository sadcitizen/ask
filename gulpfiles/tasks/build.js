'use strict';

var gulp = require('gulp'),
    styles = require('../helpers/styles'),
    scripts = require('../helpers/scripts');

gulp.task('build', ['build:styles', 'build:scripts']);

gulp.task('build:styles', function () {
    styles({
        compress: false,
        sourcemaps: true
    });
});

gulp.task('build:scripts', function () {
    scripts({
        check: false,
        compress: false,
        sourcemaps: true
    });
});

gulp.task('build:development', function () {
    styles({
        compress: true,
        sourcemaps: true
    });

    scripts({
        check: true,
        compress: true,
        sourcemaps: true
    });
});

gulp.task('build:production', function () {
    styles({
        compress: true,
        sourcemaps: false
    });

    scripts({
        check: true,
        compress: true,
        sourcemaps: false
    });
});