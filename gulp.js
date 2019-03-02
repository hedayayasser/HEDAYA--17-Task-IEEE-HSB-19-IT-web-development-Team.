const gulp = require("gulp");
var susy = require("susy");
var breakpoint = require("breakpoint")
watch = require('gulp-watch');
function browserSyncReload(done) {
    browsersync.reload();
    done();
  }
  var sassFiles = '/**/*.scss',
    cssDest = 'css/';

gulp.task('styles', function(){
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});
  function scripts() {
    return (
      gulp
        .src(["./assets/js/**/*"])
        .pipe(plumber())
        .pipe(webpackstream(webpackconfig), webpack)
        .pipe(uglify())
        // folder only, filename is specified in webpack config
        .pipe(gulp.dest("./_site/assets/js/"))
        .pipe(browsersync.stream())
    );
  }
  const js = gulp.series(scripts);
  exports.js = js;
  


 
gulp.task('stream', function (){ 
    return watch('css/**/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});
 
gulp.task('callback', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('css/**/*.css', function () {
        gulp.src('css/**/*.css')
            .pipe(gulp.dest('build'));
    });
});