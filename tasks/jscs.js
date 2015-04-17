'use strict';

var gulp = require('gulp'),
    jscs = require('gulp-jscs'),
    config = require('../gulp.config');

gulp.task('jscs', function () {
    function check(bundle) {
        return gulp.src(bundle.src)
            .pipe(jscs());
    }

    config.scripts.bundles.forEach(check);
});