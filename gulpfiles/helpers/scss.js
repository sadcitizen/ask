'use strict';

var _ = require('lodash'),
    del = require('del'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    gulpif = require('gulp-if'),
    rename = require('gulp-rename'),
    header = require('gulp-header'),
    plumber = require('gulp-plumber'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('../config.js'),
    defaults = {
        banner: '',
        browsers: ['last 2 version', 'ie >= 9']
    };

function trimLastPart(target, separator) {
    return target.split(separator).slice(0, -1).join(separator);
}

module.exports = function (options) {
    function build(bundle) {
        var cfg = _.defaults({}, bundle.options || {}, config.styles.options, defaults),
            processors = [
                autoprefixer({ browsers: cfg.browsers, diff: true })
            ],
            dest = trimLastPart(bundle.output, '/'),
            basename = trimLastPart(bundle.output.split('/').pop(), '.');

        del(dest + '/' + basename + '.*');

        return gulp.src(bundle.entry)
            .pipe(plumber())
            .pipe(gulpif(options.sourcemaps, sourcemaps.init()))
            .pipe(sass())
            .pipe(gulpif(cfg.browsers.length, postcss(processors)))
            .pipe(gulpif(options.compress, csso()))
            .pipe(rename({ basename: basename }))
            .pipe(gulpif(options.compress, rename({ suffix: '.min' })))
            .pipe(gulpif(cfg.banner.length, header(cfg.banner)))
            .pipe(gulpif(options.sourcemaps, sourcemaps.write('.')))
            .pipe(plumber.stop())
            .pipe(gulp.dest(dest));
    }

    config.styles.bundles.forEach(build);
};