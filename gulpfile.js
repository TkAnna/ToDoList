let gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    cleanCSS = require('gulp-clean-css');

gulp.task('default', function () {
    gulp.src(['src/js/functions.js',
        'src/js/task.js',
        'src/js/task.js',
        'src/js/groupOfTasks.js',
        'src/js/table.js',
        'src/js/app.js'])
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'));

});

gulp.task('watch',function () {
    gulp.watch('src/js/*.js',['default']);
});
