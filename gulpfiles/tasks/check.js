'use strict';

var _ = require('lodash'),
    gulp = require('gulp'),
    jscs = require('gulp-jscs'),
    hint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    config = require('../config.js'),
    types = ['es3', 'es5', 'es6'],
    defaults = {
        type: 'es5'
    };

gulp.task('check', function () {
    function check(bundle) {
        return gulp.src(bundle.src)
            .pipe(jscs())
            .pipe(hint('./.jshintrc'))
            .pipe(hint.reporter(stylish));
    }

    _.defaults(config.scripts.settings, defaults);

    config.scripts.bundles.forEach(function (bundle) {
        var settings = _.defaults(bundle.settings || {}, config.scripts.settings);
        if (types.indexOf(settings.type) !== -1) {
            check(bundle);
        }
    });
});