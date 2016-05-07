import gulp from 'gulp';
import lint from '../util/lint';

// Lint our test code
gulp.task('lint:tests', () => lint(['text/browser-tests/**/*.js', 'text/node-tests/**/*.js']));