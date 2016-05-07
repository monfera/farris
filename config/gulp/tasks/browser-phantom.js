import gulp from 'gulp';
import runKarma from '../util/runKarma';

gulp.task('browser:phantom', runKarma('PhantomJS', true));
