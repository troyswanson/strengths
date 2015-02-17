/*jslint node: true*/
"use strict";

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  bower: 'bower_components'
};

gulp.task('default', ['angular', 'bootstrap']);

gulp.task('angular', function () {
  return gulp.src(paths.bower + '/angular/angular.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('bootstrap', function () {
  return gulp.src(paths.bower + '/bootstrap/less/bootstrap.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('public/css'));
});
