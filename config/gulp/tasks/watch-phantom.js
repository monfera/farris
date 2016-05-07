import gulp from 'gulp';
import path from 'path';
import karma from 'karma';

gulp.task('watch:phantom', (done) => {
	let watchStarted = false;
	let server = new karma.Server({
		configFile: path.resolve('config/karma.conf.js'),
		browsers: ['PhantomJS'],
		singleRun: false
	});
	server.on('run_complete', () => {
		if (!watchStarted) {
			watchStarted = true;
			done();
		}
	});
	server.start();
});