/**
 * Gulp clean tasks.
 */

'use strict';

var gulp = require('gulp-help')(require('gulp')),
    del = require('del'),
    runSequence = require('run-sequence'),
    conf = require('./conf');

/**
 * Gulp clean lib directory task.
 */
gulp.task('clean-lib', function () {
    return del([
        conf.paths.lib
    ]);
});

<% if (bower) { -%>
/**
 * Gulp clean bower directory task.
 */
gulp.task('clean-bower', function () {
    return del([
        conf.paths.bower
    ]);
});
<% } -%>

/**
 * Gulp clean coverage directory task.
 */
gulp.task('clean-coverage', function () {
    return del([
        conf.paths.coverage
    ]);
});

/**
 * Gulp clean documentation directory task.
 */
gulp.task('clean-doc', function () {
    return del([
        conf.paths.docs
    ]);
});

/**
 * Gulp task to clean temporary .js files which are created inside src folder.
 */
gulp.task('clean-source-tmp', function () {
    return del([
            conf.paths.src + '/**/*.js',
            conf.paths.src + '/**/*.js.map',
            conf.paths.src + '/**/*.ts.ktp.ts',
            conf.paths.test + '/**/*.js',
            conf.paths.test + '/**/*.js.map',
            conf.paths.test + '/**/*.ts.ktp.ts'
    ]);
});

<% if (styles) { -%>
/**
 * Gulp task to clean css files which are created inside distribution directories.
 */
gulp.task('clean-css', function () {
    return del([
        conf.paths.bower + '/**/*.css',
        conf.paths.lib + '/**/*.css'
    ]);
});
<% } -%>

/**
 * Gulp task to clean temporary .js files which are created inside .jsTmp folder.
 */
gulp.task('clean-js-tmp', function () {
    return del([
        conf.paths.jsTmp


    ]);
});

<% if (styles) { -%>
/**
 * Gulp task to clean temporary css files which are created inside .cssTmp folder.
 */
gulp.task('clean-css-tmp', function () {
    return del([
        conf.paths.cssTmp
    ]);
});
<% } -%>

/**
 * Gulp task to clean both lib and bower directories.
 * Run clean-lib and  clean-bower tasks in parallel.
 * @param done - done callback function.
 */
gulp.task('clean-build', function(done){
    runSequence(<% if (bower) { -%>['clean-lib', 'clean-bower']<% } else { -%>'clean-lib'<% } -%>,done);
});

