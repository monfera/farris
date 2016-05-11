/* eslint-disable */

import sinonChai from 'sinon-chai';
import chai from 'chai';
import sinon from 'sinon';

global.chai = chai;
global.expect = global.chai.expect;
global.sinon = sinon;

chai.use(sinonChai);