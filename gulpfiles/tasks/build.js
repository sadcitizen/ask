'use strict';

var gulp = require('gulp'),
    scss = require('../helpers/scss'),
    js = require('../helpers/javascript');

gulp.task('build', ['build:styles', 'build:scripts']);

gulp.task('build:styles', function () {
    scss({ compress: false, sourcemaps: true });
});

gulp.task('build:scripts', function () {
    js({ check: false, compress: false, sourcemaps: true });
});

gulp.task('build:development', function () {
    scss({ compress: true, sourcemaps: true });
    js({ check: true, compress: true, sourcemaps: true });
});

gulp.task('build:production', function () {
    scss({ compress: true, sourcemaps: false });
    js({ check: true, compress: true, sourcemaps: false });
});