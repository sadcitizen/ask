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
                entry: paths.styles + 'scss/styles.scss',
                output: paths.dest + paths.css + 'scss/styles.css'
            },
            {
                entry: paths.styles + 'scss/styles.ie8.scss',
                output: paths.dest + paths.css + 'scss/styles.ie8.css',
                settings: {
                    banner: '',
                    browsers: ['last 2 version', 'ie >= 8']
                }
            }
        ],
        settings: {
            banner: banner,
            browsers: ['last 2 version', 'ie >= 9']
        }
    }//,

    //scripts: {
    //    bundles: [
    //        {
    //            name: 'es5',
    //            src: paths.scripts + 'es5/app.js',
    //            settings: {
    //                bundle: true
    //            }
    //        },
    //        {
    //            name: 'es6',
    //            src: paths.scripts + 'es6/app.js',
    //            settings: {
    //                bundle: true,
    //                type: 'es6'
    //            }
    //        },
    //        {
    //            name: 'typescript',
    //            src: paths.scripts + 'ts/app.ts',
    //            settings: {
    //                bundle: true,
    //                type: 'ts'
    //            }
    //        },
    //        {
    //            name: 'tests',
    //            src: paths.tests + '*.spec.js'
    //        },
    //        {
    //            name: 'tasks',
    //            src: [paths.tasks + '**/*.js', './gulpfile.js']
    //        }
    //    ],
    //    settings: {
    //        banner: banner,
    //        bundle: false
    //    }
    //},

    //tests: {
    //    src: paths.tests + '*.spec.js',
    //    reporter: 'list'
    //}
};
