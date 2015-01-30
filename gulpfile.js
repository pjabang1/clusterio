var gulp = require('gulp'),
        watch = require('gulp-watch'),
        concat = require('gulp-concat'),
        minifyJs = require('gulp-uglify');


var paths = {
  js:   [
        './src/intro.js',
        './src/core.js',
        './src/distance.js',
        './src/k-means.js',
        './src/hcluster.js',
        './src/outro.js'
    ]
};

gulp.task('scripts', function() {
    gulp.src(paths.js)
            .pipe(concat({path: 'clusterio.js', stat: {mode: 0666}}))
            .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function() {
    gulp.watch(paths.js, ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);

