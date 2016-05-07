import gulp from 'gulp';
import eslint from 'gulp-eslint';

// Lint a set of files
function lint(files) {
	return gulp.src(files)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
}

export default lint;