import path from 'path';
import buffer from 'vinyl-buffer';
import rollup from 'rollup-stream';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import typescript from 'rollup-plugin-typescript';
import stub from 'rollup-plugin-stub';
import pack from '../../../package.json';

/*
 * Banner
 **/
const copyright =
	'/*!\n' +
	' * ' + pack.name + ' v' + pack.version + '\n' +
	' * (c) ' + new Date().getFullYear() + ' ' + pack.author + '\n' +
	' * Released under the ' + pack.license + ' License.\n' +
	' */';

function bundle(format, entry) {
	return rollup({
		entry: path.resolve(entry),
		sourceMap: false,
		banner: copyright,
		plugins: [
			process.env.min === 'true' ? uglify({
				warnings: false,
				compress: {
					screw_ie8: true,
					dead_code: true,
					unused: true,
					keep_fargs: false,
					drop_debugger: true
				},
				mangle: {
					screw_ie8: true
				}
			}) : {},
			buble({
			}),
			nodeResolve({
				jsnext: true,
				main: true
			}),
			commonjs(),
			stub(),
			typescript(),
			filesize()
		],
		format: format,
		moduleName: 'Farris'
	});
}

export default bundle;