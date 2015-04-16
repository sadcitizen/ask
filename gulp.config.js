'use strict';

var _ = require('lodash'),
    pkg = require('./package.json'),
    banner = _.template('/*! <%= pkg.name %> - v<%= pkg.version %> - <%= timestamp %> */ \n')({ pkg: pkg, timestamp: (new Date()).toString() }),
    styles = './styles/';

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
    }
};