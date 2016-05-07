import gulp from 'gulp';
import runSequence from 'run-sequence';
import sequenceComplete from '../util/sequenceComplete';

// Bundle all bundles
gulp.task('build', ['lint:src', 'build:prod', 'build:dev', 'build:common']);

gulp.task('build', function(done) {
	runSequence(/*'lint:src'*/
		'clean',
		['build:dev', 'build:prod'],
		'build:common',
		sequenceComplete(done));
});