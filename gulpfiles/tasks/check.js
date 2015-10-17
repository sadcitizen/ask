'use strict';

var _ = require('lodash'),
    gulp = require('gulp'),
    jscs = require('gulp-jscs'),
    hint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    config = require('../config.js');

gulp.task('check', function () {
    function check(source) {
        console.log(source);
        return gulp.src(source)
            .pipe(jscs())
            .pipe(hint('./.jshintrc'))
            .pipe(hint.reporter(stylish));
    }

    var bundles = [];

    config.javascript.bundles.forEach(function (bundle) {
        if (bundle.options && bundle.options.check) {
            bundles.push(bundle.all ? bundle.all : bundle.entry);
        }
    });

    bundles.push.apply(bundles, config.common.entry);

    bundles.forEach(check);
});