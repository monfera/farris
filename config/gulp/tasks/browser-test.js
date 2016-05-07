import gulp from 'gulp';
import runKarma from '../util/runKarma';

gulp.task('test:browser', runKarma('PhantomJS', true));
