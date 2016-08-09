'use strict';

var gulp = require('gulp'),
	// concatCss= require("gulp-cocat-css"),
	cleanCss = require('gulp-clean-css'),
	notify = require("gulp-notify"),
	autoprefixer = require('gulp-autoprefixer'),
	htmlmin = require('gulp-htmlmin'),
	sass = require('gulp-sass');

gulp.task('sass', function (){
	return gulp.src('./app/sass/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('./app/css'))
})
gulp.task('css', function () {
  return gulp.src('./app/css/main.css')
    .pipe(cleanCss("./app/css/main.css"))
    .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
    .pipe(notify('Done'))
    .pipe(gulp.dest('./app/css'))
	})

gulp.task('html', function() {
	return	gulp.src('./index.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	 .pipe(gulp.dest('dist'))
});

gulp.task('watch', function() {
	gulp.watch('./app/css/*.css', ['css'])
	gulp.watch('./app/sass/*.sass', ['sass'])
})

gulp.task('default', ['html', 'css', 'watch', 'sass'])
