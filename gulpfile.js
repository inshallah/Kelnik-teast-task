var gulp = require('gulp'),
sass = require('gulp-sass'),


gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
});

gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
});

gulp.task('deploy', function() {
  return gulp.src(dirs.build + '/**/*')
    .pipe(ghPages({
      // origin: "upstream"
      // remoteUrl:
    }));
});