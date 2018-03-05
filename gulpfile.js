let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let webserver = require('gulp-webserver');

gulp.task('serve', ['webserver'], function () {
  gulp.watch('./slider.scss', ['css']);
});

gulp.task('css', function () {
  return gulp.src('*.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./'));
});

gulp.task('webserver', function () {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      port: 8080,
      host: '0.0.0.0'
    }));
});