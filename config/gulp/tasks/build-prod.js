import gulp from 'gulp';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import bundle from '../util/bundle';
import pkg from '../../../package.json';

// Build a production bundle
gulp.task('build:prod', () => {
	process.env.NODE_ENV = 'production';
	process.env.min = true;

	return bundle('umd', 'src/index.js')
		.pipe(source(pkg.name + '.min.js'))
		.pipe(buffer())
		.pipe(gulp.dest('dist'));
});