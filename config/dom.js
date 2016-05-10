/* eslint-disable */

var sinonChai = require('sinon-chai');

global.chai = require('chai');
global.expect = global.chai.expect;
global.sinon = require('sinon');

chai.use(sinonChai);