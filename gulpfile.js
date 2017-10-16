const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const rimraf = require('rimraf');

const sassDir = './src/scss/**.scss';
gulp.task('clean', cb => rimraf('./build', cb));
gulp.task('scss', () => {
    return gulp.src('./src/scss/**.scss')
        .pipe(sass(
            {
                outputStyle: 'compressed'
            }
        ).on('error', sass.logError))
        .pipe(gulp.dest('./build/css'))
});

gulp.task('scss:watch', () => {
    gulp.watch(sassDir, gulp.series('scss'));
});

gulp.task('copy', () => {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('build'));
});

gulp.task('js', () => {
    return gulp.src('./src/js/*.js')
        .pipe(gulp.dest('build/js'));
});

gulp.task('img', () => {
    return gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
});

gulp.task('build', gulp.parallel('copy', 'js', 'scss', 'img'));
gulp.task('build:watch', () => {
    gulp.watch('./src', gulp.series('build'));
});
