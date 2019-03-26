const gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    util = require('gulp-util'),
    plumber = require('gulp-plumber'),
    path = require('path');


const SASS_INCLUDE_PATHS = [
    path.join(__dirname, 'dist/bower_components/foundation-sites/scss'),
];

var onError = function(error) {
    console.log(error);
};

gulp.task('scss', function() {
    gulp.src(['src/scss/*.scss'])
        .pipe(sass({
            includePaths: SASS_INCLUDE_PATHS
        }).on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
});

gulp.task('css', function() {
    gulp.src(['src/css/main.css'])
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(autoprefixer())
        .pipe(cssnano({
            zindex: false,
        }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'));
});


gulp.task('watch', function() {
    gulp.watch('src/scss/*.scss' ['scss']);
    gulp.watch('src/css/main.css', ['css']);
});

gulp.task('default', ['scss', 'css', 'watch']);