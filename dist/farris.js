/*!
 * farris v0.2.1
 * (c) 2016 KFlash
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Farris = factory());
}(this, function () { 'use strict';

	var foo = {};

	// Correct version will be set with the 'rollup-replace plugin'
	foo.version = '0.2.1';

	return foo;

}));