'use strict';

var pkg = require('./package.json'),
    gutil = require('gulp-util'),
    dtf = require('dateformat'),
    banner = gutil.template('/*! <%= pkg.name %> - v<%= pkg.version %> - <%= timestamp %> */ \n', {
        pkg: pkg,
        timestamp: dtf(new Date(), 'dd/mm/yyyy hh:MM:ss TT Z'), file: 'config'
    }),
    scripts = './scripts/',
    styles = './styles/',
    tests = './tests/';

module.exports = {
    paths: {
        dest: './build/',
        css: 'css/',
        js: 'js/',
        img: 'img/'
    },

    styles: {
        bundles: [
            {
                name: 'styles',
                src: styles + 'styles.scss'
            },
            {
                name: 'styles.ie8',
                src: styles + 'styles.ie8.scss',
                settings: {
                    browsers: ['last 2 version', 'ie 8'],
                    banner: ''
                }
            }
        ],
        settings: {
            compress: true,
            browsers: ['last 2 version', 'ie 9'],
            sourcemaps: true,
            banner: banner
        }
    },

    scripts: {
        bundles: [{
            name: 'app',
            src: scripts + 'app.js'
        }],
        settings: {
            compress: true,
            sourcemaps: true,
            banner: banner
        }
    },

    tests: {
        src: tests + '*.spec.js',
        reporter: 'list'
    }
};
