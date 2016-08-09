var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var jade        = require('gulp-jade');
var reload      = browserSync.reload;

/**
 * Compile jade files into HTML
 */
gulp.task('templates', function() {

    return gulp.src('./app/jade/**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./app'))
});

/**
 * Important!!
 * Separate task for the reaction to `.jade` files
 */
gulp.task('jade-watch', ['templates'], reload);

/**
 * Sass task for live injecting into all browsers
 */
gulp.task('sass', function () {
    return gulp.src('./app/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'))
        .pipe(reload({stream: true}));
});

/**
 * Serve and watch the scss/jade files for changes
 */
gulp.task('default', ['sass', 'templates'], function () {

    browserSync({server: './app'});

    gulp.watch('./app/sass/*.sass', ['sass']);
    gulp.watch('./app/jade/*.jade', ['jade-watch']);
});
