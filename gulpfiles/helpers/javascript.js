'use strict';

var _ = require('lodash'),
    del = require('del'),
    gulp = require('gulp'),
    gulpif = require('gulp-if'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    header = require('gulp-header'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('../config.js'),
    defaults = {
        banner: '',
        watch: false
    };

function trimLastPart(target, separator) {
    return target.split(separator).slice(0, -1).join(separator);
}

module.exports = function (options) {
    function build(bundle) {
        var cfg = _.defaults({}, bundle.options || {}, config.javascript.options, defaults),
            bundler = browserify({ entries: bundle.entry, debug: true }).transform(babelify),
            dest = trimLastPart(bundle.output, '/'),
            basename = trimLastPart(bundle.output.split('/').pop(), '.');

        del(dest + '/' + basename + '.*');

        return bundler.bundle()
            .pipe(plumber())
            .pipe(source(basename + '.js'))
            .pipe(buffer())
            .pipe(gulpif(options.sourcemaps, sourcemaps.init({ loadMaps: true })))
            .pipe(gulpif(options.compress, uglify()))
            .pipe(gulpif(options.compress, rename({ suffix: '.min' })))
            .pipe(gulpif(cfg.banner.length, header(cfg.banner)))
            .pipe(gulpif(options.sourcemaps, sourcemaps.write('.')))
            .pipe(plumber.stop())
            .pipe(gulp.dest(dest));
    }

    config.javascript.bundles.forEach(build);
};