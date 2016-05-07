import gulp from 'gulp';

// Run the headless unit tests as you make changes.
gulp.task('watch:node',() => {
	gulp.watch(['src/**/*', 'test/node-tests/**/*spec.server.js', 'package.json'], ['test:node']);
});