/* eslint-disable */

import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import jsdom from 'jsdom';

chai.use(require('sinon-chai'));

// Setup the jsdom environment
// @see https://github.com/facebook/react/issues/5046
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;

//JSDOM doesn't support localStrage by default, so lets just fake it..
if (!global.window.localStorage) {
	global.window.localStorage = {
		getItem() { return '{}'; },
		setItem() {}
	};
}

// take all properties of the window object and also attach it to the
// mocha global object
propagateToGlobal(global.window);

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal (window) {
	for (var key in window) {
		if (!window.hasOwnProperty(key)) continue;
		if (key in global) continue;

		global[key] = window[key];
	}
}

function bootStrap() {
	global.expect = chai.expect;

	beforeEach(function() {
		global.sandbox = sinon.sandbox.create();
		global.stub = global.sandbox.stub.bind(global.sandbox);
		global.spy = global.sandbox.spy.bind(global.sandbox);
		global.mock = global.sandbox.mock.bind(global.sandbox);
		global.useFakeTimers = global.sandbox.useFakeTimers.bind(global.sandbox);
		global.useFakeXMLHttpRequest = global.sandbox.useFakeXMLHttpRequest.bind(global.sandbox);
		global.useFakeServer = global.sandbox.useFakeServer.bind(global.sandbox);
	});

	afterEach(function() {
		delete global.stub;
		delete global.spy;
		global.sandbox.restore();
	});
}

bootStrap();