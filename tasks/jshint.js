'use strict';

var gulp = require('gulp'),
    hint = require('gulp-jshint'),
    config = require('../gulp.config');

gulp.task('hint', function () {
    function check(bundle) {
        return gulp.src(bundle.src)
            .pipe(hint('./.jshintrc'))
            .pipe(hint.reporter('default'));
    }

    config.scripts.bundles.forEach(check);
});