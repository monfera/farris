const buble = require('rollup-plugin-buble');
const istanbul = require('rollup-plugin-istanbul');

/* global module */
module.exports = function (config) {
    const configuration = {
		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '..',
		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: [
			'sinon-chai',
			'sinon',
			'chai',
			'mocha'
		],
		files: [
			'test/browser-tests/**/*browser.js',
			'test/node-tests/**/*node.js'
		],
		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera (has to be installed with `npm install karma-opera-launcher`)
		// - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
		// - PhantomJS
		// - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
		browsers: ['Chrome'],
	    customLaunchers: {
		    ChromeTravisCi: {
			    base: 'Chrome',
			    flags: ['--no-sandbox']
		    }
	    },
		// list of files to exclude
		exclude: [],
		preprocessors: {
			'src/**/*.js': ['rollup'],
			'test/browser-tests/**/*browser.js': ['rollup'],
			'test/node-tests/**/*node.js': ['rollup']
		},
	    rollupPreprocessor: {
		    rollup: {
			    plugins: [
				    buble({
					    exclude: 'node_modules/**'
				    }),
				    istanbul({
					    exclude: ['test/**/*.js']
				    })
			    ]
		    },
		    bundle: {
			    intro: '(function() {',
			    outro: '})();',
			    sourceMap: false
		    }
	    },
	    coverageReporter: {
		    reporters: [{

			    type: 'text',
			    dir: '../coverage'
		    }, {
			    type: 'lcov',
			    dir: '../coverage'
		    }]
	    },
	    // test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
	    reporters: ['mocha', 'coverage'],

	    browserDisconnectTimeout: 10000,
		browserDisconnectTolerance: 2,
		// concurrency level how many browser should be started simultaneously
		concurrency: 4,
		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 100000,
		browserNoActivityTimeout: 30000,
		// enable / disable colors in the output (reporters and logs)
		colors: true,
		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,
		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,
		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		//singleRun: true
	};

	if (process.env.TRAVIS) {

		// Used by Travis to push coveralls info corretly to example coveralls.io
		configuration.reporters = ['mocha', 'coverage', 'coveralls'];
		// Use Chrome as default browser for Travis CIs
		configuration.browsers = ['ChromeTravisCi'];
		// Karma (with socket.io 1.x) buffers by 50 and 50 tests can take a long time on IEs;-)
		configuration.browserNoActivityTimeout = 120000;
	}
    config.set(configuration);
};
