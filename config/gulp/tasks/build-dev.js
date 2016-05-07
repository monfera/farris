import gulp from 'gulp';
import path from 'path';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import bundle from '../util/bundle';
import pkg from '../../../package.json';

// Build a production bundle
gulp.task('build:dev', () => {
	process.env.NODE_ENV = 'development';
	process.env.min = false;

	return bundle('umd', 'src/index.js')
		.pipe(source(pkg.name + '.js'))
		.pipe(buffer())
		.pipe(gulp.dest('dist'));
});
