// Require all tasks in the 'config/gulp' folder.subfolder
import './config/gulp';
/*
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var rollup = require('rollup-stream');
var babel = require('rollup-plugin-babel');
var buble = require('rollup-plugin-buble');
var uglify = require('rollup-plugin-uglify');
var path = require('path');
var buffer = require('vinyl-buffer');
var fs = require('fs');
var karma = require('karma');
var bump = require('gulp-bump');
var semver = require('semver');

var getPackageJson = function () {
	return JSON.parse(fs.readFileSync('./package.json', 'utf8'));
};
var pkg = getPackageJson();
var newVer = semver.inc(pkg.version, 'patch');


function bundle(format) {
	return rollup({
		entry: 'src/index.js',
		sourceMap: false,
		plugins: [
			process.env.min === 'true' ? uglify({
				output: { comments: /@license/ },
				compress: { keep_fargs: false }
			}) : {},
			buble({})
		],
		format: format,
		moduleName: 'Chipza'
	});
}


function build() {
	process.env.NODE_ENV = 'development';
	process.env.min = false;

	return bundle('umd')
		.pipe(source('chipza.js'))
		.pipe(buffer())
		.pipe(gulp.dest('dist'));
}

function unitPhantom(done) {
	process.env.NODE_ENV = 'test';
	new karma.Server({
		configFile: path.resolve('config/karma.conf.js'),
		singleRun: true,
		browsers: ['PhantomJS']
	}, done).start();
}


gulp.task('build', build);
gulp.task('browser:phantomJS', unitPhantom);
gulp.task('bump', function(){
	gulp.src('./package.json')
		.pipe(bump({version: newVer}))
		.pipe(gulp.dest('./'));
});*/