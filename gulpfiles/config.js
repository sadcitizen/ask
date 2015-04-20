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
                name: 'styles',
                src: paths.styles + 'styles.scss'
            },
            {
                name: 'styles.ie8',
                src: paths.styles + 'styles.ie8.scss',
                settings: {
                    banner: '',
                    browsers: ['last 2 version', 'ie 8']
                }
            }
        ],
        settings: {
            banner: banner,
            browsers: ['last 2 version', 'ie 9']
        }
    },

    scripts: {
        bundles: [
            {
                name: 'app',
                src: paths.scripts + 'app.js',
                settings: {
                    bundle: true
                }
            },
            {
                name: 'tests',
                src: paths.tests + '*.spec.js'
            },
            {
                name: 'tasks',
                src: [paths.tasks + '**/*.js', './gulpfile.js']
            }
        ],
        settings: {
            banner: banner,
            bundle: false
        }
    },

    tests: {
        src: paths.tests + '*.spec.js',
        reporter: 'list'
    }
};
