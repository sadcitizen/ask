'use strict';

var _ = require('lodash'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    gulpif = require('gulp-if'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    header = require('gulp-header'),
    plumber = require('gulp-plumber'),
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
        var settings = _.defaults(bundle.settings || {}, config.styles.settings);

        gutil.log('--> Compiling \'' + gutil.colors.green(bundle.name) + '\' from \'' + gutil.colors.green(bundle.src) + '\'...');

        return gulp.src(bundle.src)
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(gulpif(settings.browsers.length, prefix({ browsers: settings.browsers })))
            .pipe(gulpif(settings.compress, csso()))
            .pipe(gulpif(settings.compress, rename({ suffix: '.min' })))
            .pipe(gulpif(settings.banner.length, header(settings.banner)))
            .pipe(sourcemaps.write('.'))
            .pipe(plumber.stop())
            .pipe(gulp.dest(paths.dest + paths.css));
    }

    config.styles.bundles.forEach(build);
});