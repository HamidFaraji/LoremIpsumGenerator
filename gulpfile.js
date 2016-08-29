let gulp = require('gulp');
let ts = require('gulp-typescript');

gulp.task('default', function () {
	return gulp.src('src/typescript/**/*.ts')
		.pipe(ts())
		.pipe(gulp.dest('dest/js'));
});


gulp.watch('src/typescript/**/*.ts', ['default']);