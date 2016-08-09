

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var jade        = require('gulp-jade');
//var plumberNotifier = require('gulp-plumber-notifier');


gulp.task('jade', function() {
    return gulp.src('./app/jade/**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./app'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('sass', function () {
    return gulp.src('./app/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', ['sass', 'browser-sync'], function() {
	gulp.watch('app/sass/*.sass', ['sass']);
	gulp.watch('app/jade/**/*.jade', ['jade']);
    gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);
