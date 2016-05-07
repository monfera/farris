import gulp from 'gulp';
import path from 'path';
import mocha from 'gulp-mocha';

// Run all unit tests for server
gulp.task('test:node', () => {
	require('babel-register');
	return gulp.src(['config/config.js', 'test/node-tests/**/*spec.node.js'], {
			read: false
		})
		.pipe(mocha({
			reporter: 'spec',
			compilers: 'js:babel-core/register',
			ui: 'bdd',
			timeout: 15000,
			globals: Object.keys({
				reporter: 'spec',
				timeout: 15000,
				expect: true,
				mock: true,
				sandbox: true,
				spy: true,
				stub: true,
				useFakeServer: true,
				useFakeTimers: true,
				useFakeXMLHttpRequest: true
			}),
			ignoreLeaks: false
		}));
});