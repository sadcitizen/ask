'use strict';

var _ = require('lodash'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    gulpif = require('gulp-if'),
    rename = require('gulp-rename'),
    header = require('gulp-header'),
    plumber = require('gulp-plumber'),
    prefix = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('../config.js'),
    paths = config.paths,
    defaults = {
        banner: '',
        browsers: []
    };

module.exports = function (options) {
    _.defaults(config.styles.settings, defaults, options);

    function build(bundle) {
        var settings = _.defaults(bundle.settings || {}, config.styles.settings);

        return gulp.src(bundle.src)
            .pipe(plumber())
            .pipe(gulpif(settings.sourcemaps, sourcemaps.init()))
            .pipe(sass())
            .pipe(gulpif(settings.browsers.length, prefix({ browsers: settings.browsers })))
            .pipe(gulpif(settings.compress, csso()))
            .pipe(rename({ basename: bundle.name }))
            .pipe(gulpif(settings.compress, rename({ suffix: '.min' })))
            .pipe(gulpif(settings.banner.length, header(settings.banner)))
            .pipe(gulpif(settings.sourcemaps, sourcemaps.write('.')))
            .pipe(plumber.stop())
            .pipe(gulp.dest(paths.dest + paths.css));
    }

    config.styles.bundles.forEach(build);
};