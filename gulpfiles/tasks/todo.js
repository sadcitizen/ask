'use strict';

var gulp = require('gulp'),
    todo = require('gulp-todo'),
    config = require('../config.js');

function reporter(todos) {
    return todos.map(function (td) {
        return '- ' +  td.kind + ': ' + td.text + ' (' + td.file + ', строка: ' + td.line + ')';
    }).join('\n');
}

gulp.task('todo', function () {
    function collect(bundle) {
        return gulp.src(bundle.src)
            .pipe(todo({
                fileName: bundle.name + '.todo.txt',
                verbose: true,
                reporter: reporter
            }))
            .pipe(gulp.dest('./todo'));
    }

    config.styles.bundles.forEach(collect);
    config.scripts.bundles.forEach(collect);
});