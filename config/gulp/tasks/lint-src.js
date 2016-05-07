import gulp from 'gulp';
import lint from '../util/lint';

// Lint our source code
gulp.task('lint:src', () => lint('src/**/*.js'));