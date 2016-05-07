import gulp from 'gulp';
import path from 'path';
import lint from '../util/lint';

// Lint the gulp file
gulp.task('lint:gulp', () => lint(path.resolve('gulpfile.babel.js')));