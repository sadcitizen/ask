'use strict';

var gulp = require('gulp'),
    jscs = require('gulp-jscs'),
    hint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    config = require('../config.js');

gulp.task('check', function () {
    function check(bundle) {
        return gulp.src(bundle.src)
            .pipe(jscs())
            .pipe(hint('./.jshintrc'))
            .pipe(hint.reporter(stylish));
    }

    config.scripts.bundles.forEach(check);
});