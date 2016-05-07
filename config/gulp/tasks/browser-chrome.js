import gulp from 'gulp';
import runKarma from '../util/runKarma';

gulp.task('browser:chrome', runKarma('Chrome', true));
