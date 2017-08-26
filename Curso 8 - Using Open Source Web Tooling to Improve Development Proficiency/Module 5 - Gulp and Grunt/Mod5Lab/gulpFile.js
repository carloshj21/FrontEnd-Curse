var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

gulp.task('default', ['uglify', 'lint']);

gulp.task('uglify', function () {
    return gulp.src('lintTest.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist-gulp'));
});

gulp.task('lint', function() {
    gulp.src('lintTest.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});