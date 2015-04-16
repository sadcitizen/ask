'use strict';

var _ = require('lodash'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    gulpif = require('gulp-if'),
    rename = require('gulp-rename'),
    prefix = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('../gulp.config'),
    paths = config.paths;

var defaults = {
    compress: false,
    browsers: [],
    sourcemaps: false,
    banner: ''
};

gulp.task('styles', function () {
    _.defaults(config.styles.settings, defaults);

    function build (bundle) {
        bundle.settings = _.defaults(bundle.settings || {}, config.styles.settings);

        var browsers = bundle.settings.browsers;

        return gulp.src(bundle.src)
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(gulpif(browsers.length, prefix({ browsers: browsers })))
            .pipe(gulpif(bundle.compress, csso()))
            .pipe(gulpif(bundle.compress, rename({ suffix: '.min' })))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(paths.dest + paths.css));
    }

    config.styles.bundles.forEach(build);
});