import gulp from 'gulp';
import istanbul from 'gulp-istanbul';
import mocha from 'gulp-mocha';
import coveralls from 'gulp-coveralls';
import { Instrumenter } from 'isparta';

// Set up coverage and run tests
gulp.task('coverage', (done) => {
		require('babel-register');
		gulp.src(['./src/**/*.js'])
			.pipe(istanbul({
				exclude: /node_modules|specs|dist/,
				instrumenter: Instrumenter,
				includeUntested: true
			}))
			.pipe(istanbul.hookRequire())
			.pipe(coveralls())
			.on('finish', () => {
				return gulp.src(['config/config.js', 'test/node-tests/**/*spec.server.js'], {
						read: false
					})
					.pipe(mocha({
						reporter: 'spec',
						timeout: 15000,
						globals: Object.keys({
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
					}))
					.pipe(istanbul.writeReports())
					.on('end', done);
			});
	}
);