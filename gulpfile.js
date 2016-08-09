

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    sass        = require('gulp-sass'),
    jade        = require('gulp-jade'),
    del         = require('del'),
    autoprefixer = require('gulp-autoprefixer');


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
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
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

gulp.task('css-libs', ['sass'], function() {
    return gulp.src('app/css/nornalize.css') // Выбираем файл для минификации
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});

gulp.task('clean', function() {
    return del.sync('dist/*');
});


gulp.task('build', ['sass','clean', 'css-libs', 'jade' ], function() {

    var buildCss = gulp.src(['app/css/main.css','app/css/normalize.css' ])
    .pipe(gulp.dest("dist/css"))

    var buildFonts = gulp.src('app/fonts/FiraSans/*')
    .pipe(gulp.dest('dist/fonts/FiraSans'))

    var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'))

    var buildIcons = gulp.src('app/icons/**/*')
    .pipe(gulp.dest('dist/icons'))

    var buildImg = gulp.src('app/img/**/*')
    .pipe(gulp.dest('dist/img'))

    var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
});
gulp.task('watch', ['sass', 'browser-sync'], function() {
	gulp.watch('app/sass/*.sass', ['sass']);
	gulp.watch('app/jade/**/*.jade', ['jade']);
    gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/*.js', browserSync.reload);
});

gulp.task('clear', function () {
    return cache.clearAll();
})
gulp.task('default', ['watch']);
