'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    log = gutil.log,
    highlight = gutil.colors.green;

gulp.task('default', function () {
    log(highlight('gulp build') + ' - запускает сборку проекта без минификации, проверки стайлгайда, тестов (sourcemaps генерируются)');
    log(highlight('gulp build:styles') + ' - запускает сборку стилей без минификации (sourcemaps генерируются)');
    log(highlight('gulp build:scripts') + ' - запускает сборку скриптов без минификации, проверки стайлгайда, тестов (sourcemaps генерируются)');
    log(highlight('gulp build:development') + ' - запускает сборку проекта c минификацией, проверкой стайлгайда и с запуском тестов (sourcemaps генерируются)');
    log(highlight('gulp build:production') + ' - сборка проекта с минификацией скриптов, стилей и картинок без sourcemaps');
    log(highlight('gulp watch') + ' - запускает вотчер за скриптами и стилями');
    log(highlight('gulp watch:styles') + ' - запускает вотчер за стилями');
    log(highlight('gulp watch:scripts') + ' - запускает вотчер за скриптами');
    log(highlight('gulp tests') + ' - запускает тесты');
    log(highlight('gulp check') + ' - запускает проверку стайлгайда для скриптов');
});