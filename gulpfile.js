var gulp = require('gulp'),
        watch = require('gulp-watch'),
        concat = require('gulp-concat'),
        minifyJs = require('gulp-uglify')
        karma = require('karma').server;;


var paths = {
    js: [
        './src/intro.js',
        './src/core.js',
        './src/distance.js',
        './src/k-means.js',
        './src/hcluster.js',
        './src/outro.js'
    ],
};

gulp.task('scripts', function() {
    gulp.src(paths.js)
            .pipe(concat({path: 'clusterio.js'}))
            .pipe(gulp.dest('./dist/js'));
    
    gulp.src(['./dist/js/clusterio.js'])
            .pipe(minifyJs())
            .pipe(concat({path: 'clusterio.min.js'}))
            .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function() {
    gulp.watch(paths.js, ['scripts']);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});


gulp.task('default', ['scripts', 'watch', 'tdd']);

