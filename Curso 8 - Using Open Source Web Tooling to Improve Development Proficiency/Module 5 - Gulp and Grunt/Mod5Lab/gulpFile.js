var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');

gulp.task('default', ['uglify', 'lint']);

gulp.task('uglify', function () {
    return watch('lintTest.js', { ignoreInitial: false })
        .pipe(gulp.src('lintTest.js')
            .pipe(uglify())
            .pipe(gulp.dest('dist-gulp'))
        );
});

gulp.task('lint', function () {
    return watch('lintTest.js', { ignoreInitial: false })
        .pipe(gulp.src('lintTest.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'))
        );
});