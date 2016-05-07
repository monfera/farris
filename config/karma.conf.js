var buble = require('rollup-plugin-buble');
var multi = require('rollup-plugin-multi-entry').default;

module.exports = function(config) {
	config.set({
		frameworks: ['mocha', 'sinon-chai'],

		basePath: '../',

		files: [
			'test/browser-tests/**/*spec.browser.js',
			'test/node-tests/**/*spec.server.js'
		],

		preprocessors: {
			'src/**/*.js': ['rollup'],
			'test/browser-tests/**/*spec.browser.js': ['rollup'],
			'test/node-tests/**/*spec.server.js': ['rollup']
		},

		rollupPreprocessor: {
			rollup: {
				plugins: [
					multi(),
					buble({})
				]
			},
			bundle: {
				intro: '(function() {',
				outro: '})();',
				sourceMap: 'inline'
			}
		},

		reporters: ['mocha'],

		port: 9876,
		captureTimeout: 60000,
		browserDisconnectTimeout : 60000,
		browserDisconnectTolerance : 3,
		browserNoActivityTimeout : 60000,
		colors: true,

		logLevel: config.LOG_INFO,

		autoWatch: false,

		singleRun: true,

		// change Karma's debug.html to the mocha web reporter
		client: {
			mocha: {
				reporter: 'html'
			}
		}
	});
};