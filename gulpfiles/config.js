'use strict';

var pkg = require('./../package.json'),
    gutil = require('gulp-util'),
    dtf = require('dateformat'),
    banner = gutil.template('/*! <%= pkg.name %> - v<%= pkg.version %> - <%= timestamp %> */ \n', {
        pkg: pkg,
        timestamp: dtf(new Date(), 'dd/mm/yyyy hh:MM:ss TT Z'),
        file: 'config'
    }),
    paths = {
        dest: './build/',
        scripts: './scripts/',
        styles: './styles/',
        tasks: './gulpfiles/',
        tests: './tests/',
        css: 'css/',
        js: 'js/',
        img: 'img/'
    };

module.exports = {
    paths: paths,

    styles: {
        bundles: [
            {
                entry: paths.styles + 'styles.scss',
                output: paths.dest + paths.css + 'styles.css'
            },
            {
                entry: paths.styles + 'styles.ie8.scss',
                output: paths.dest + paths.css + 'styles.ie8.css',
                options: {
                    banner: '',
                    browsers: ['last 2 version', 'ie >= 8']
                }
            }
        ],
        options: {
            banner: banner,
            browsers: ['last 2 version', 'ie >= 9']
        }
    },

    javascript: {
        bundles: [
            {
                entry: paths.scripts + 'app.js',
                all: paths.scripts + '**/*.js',
                output: paths.dest + paths.js + 'app.js',
                options: {
                    banner: '',
                    check: true
                }
            },
            {
                entry: paths.scripts + 'vendor.js',
                output: paths.dest + paths.js + 'vendor.js'
            }
        ],
        options: {
            banner: banner
        }
    },

    /**
     * Only for code style checking.
     */
    common: {
        entry: [paths.tests + '*.spec.js', paths.tasks + '**/*.js', './gulpfile.js']
    },

    tests: {
        entry: paths.tests + '*.spec.js',
        reporter: 'list'
    }
};
