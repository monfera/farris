import * as p from 'path';
import * as fs from 'fs';
import { rollup } from 'rollup';
import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';
import commonJS from 'rollup-plugin-commonjs';
import pack from '../package.json';

/*
 * Banner
 **/
const copyright =
	'/*!\n' +
	' * ' + pack.name + ' v' + pack.version + '\n' +
	' * (c) ' + new Date().getFullYear() + ' ' + pack.author.name + '\n' +
	' * Released under the ' + pack.license + ' License.\n' +
	' */';

Promise.resolve(rollup({
		entry: p.resolve('src/index.js'),
		plugins: [
			process.env.NODE_ENV === 'production' ? uglify({
				warnings: false,
				compress: {
					screw_ie8: true,
					dead_code: true,
					unused: true,
					keep_fargs: false,
					drop_debugger: true,
					booleans: true // various optimizations for boolean context, for example !!a ? b : c → a ? b : c
				},
				mangle: {
					screw_ie8: true
				}
			}) : {},
			buble({}),
			nodeResolve({
				jsnext: true,
				main: true
			}),
			filesize(),
			commonJS(),
			replace({
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			})
		]
	}))
	.then(({write}) => write({
		dest: p.resolve(`dist/farris.${process.env.NODE_ENV === 'production' ? 'min.js' : 'js'}`),
		moduleName: 'Farris',
		format: 'umd',
		banner: copyright,
		sourceMap: false
	}));