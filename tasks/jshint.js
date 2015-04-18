'use strict';

var gulp = require('gulp'),
    hint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    config = require('../gulp.config');

gulp.task('hint', function () {
    function check(bundle) {
        return gulp.src(bundle.src)
            .pipe(hint('./.jshintrc'))
            .pipe(hint.reporter(stylish));
    }

    config.scripts.bundles.forEach(check);
});