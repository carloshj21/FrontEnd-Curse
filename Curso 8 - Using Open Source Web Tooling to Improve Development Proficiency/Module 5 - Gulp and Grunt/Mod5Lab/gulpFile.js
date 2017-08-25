var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', ['uglify']);

gulp.task('uglify', function () {
    return gulp.src('lintTest.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist-gulp'));
});