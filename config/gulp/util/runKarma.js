import { Server } from 'karma';
import path from 'path';

function runKarma(browser) {
	return (done) => {
		process.env.NODE_ENV = 'test';
		new Server({
				configFile: path.resolve('config/karma.conf.js'),
				singleRun: true,
				browserNoActivityTimeout: 240000,
				captureTimeout: 120000,
				browsers: [browser]
			},
			function(err) {
				done();
				process.exit(err ? 1 : 0);
			})
			.start();
	}
}

export default runKarma;