### ES2015 boilerplate for creating libraries with Bublé

[![Build Status](https://travis-ci.org/Kflash/farris.svg?branch=master)](https://travis-ci.org/Kflash/farris)
[![Circle CI](https://circleci.com/gh/Kflash/farris/tree/master.svg?style=svg)](https://circleci.com/gh/Kflash/farris/tree/master)
[![npm version](https://badge.fury.io/js/farris.svg)](https://badge.fury.io/js/farris)
[![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://github.com/kflash/farris/blob/master/LICENSE.md)
[![npm downloads](https://img.shields.io/npm/dm/farris.svg)](https://www.npmjs.org/package/farris)

> A starter kit to get you up and running with a bunch of awesome new front-end technologies using Bublé as the ES2015 compiler

## Features

* [Bublé](https://gitlab.com/Rich-Harris/buble) as the ES2015 compiler
* [Rollup](http://rollupjs.org/) for bundling
* [Eslint](http://eslint.org/) to maintain a consistent code style
* [Karma](http://karma-runner.github.io/0.13/index.html) as the test runner
* [ES6 with Babel](http://babeljs.io/) for Mocha tests
* [Universal Module Definition (UMD) API](https://github.com/umdjs/umd), which provides compatibility with the most popular script loaders, to the output.
* [Sinon.JS](http://sinonjs.org/) with examples for test doubles
* Node >= 6.x

## Quick start

The only development dependency of this project is [Node.js](https://nodejs.org/en/). So just make sure you have it installed. Then type few commands known to every Node developer...

```js
$ git clone https://github.com/kflash/farris.git
$ cd farris
$ npm install                   # Install Node modules listed in ./package.json
$ npm run build                 # Build a minified and a non-minified version of the library
```

... and boom! You have it all setup for you!

## Workflow

* `npm run build` - build task that generate a minified and a non-minified script
* `npm run build:prod` - build task that generate a production bundle
* `npm run build:dev` - build task that generate a development bundle
* `npm run lint:src` - lint the source
* `npm run lint:tests` - lint the unit tests
* `npm run clean` - remove the coverage report - and the *dist* folder
* `npm run node:cov` - run Isparta, a code coverage tool
* `npm run test` - runs unit tests for both node and the browser. With Karma as the test runner
* `npm run test:browser` - runs the unit tests for browser
* `npm run test:chrome` - runs the unit tests for browser with Chrome
* `npm run test:node` - runs the unit tests in the node environment
* `npm run test:all` - runs all unit tests
* `npm run watch:node` - run all unit tests in the node environemnt, and watch files for changes
* `npm run watch:browser` - run all unit tests for browser and watch files for changes
* `npm run watch:chrome` - run all unit tests for browser with Chrome and watch files for changes
* `npm run dependencies:check` - shows a list over dependencies with a higher version number then the current one - if any
* `npm run dependencies:upgrade` - automatically upgrade all devDependencies & dependencies, and update package.json

## Testing environment

This project uses Mocha to run your unit tests, it uses Karma as the test runner, it enables the feature that you are able to render your tests to the browser (e.g: Firefox, Chrome etc.).

To add a unit test, simply create a `.browser.js` or a `.node.js` file inside the `~../test/browser-tests/` or `~../test/node-tests/` folder. Karma will pick up on these files automatically, and Mocha and Chai will be available within your unit tests without the need to import them.

To run unit tests only for the browser, or in the node environment, create either a `~/.browser.js` or `~/node` file inside the same folder.

To run the tests in the project, just simply `npm run test` for both the browser and node unit tests, or `npm run test:node`. for the node environment or `npm run test:browser`. for browser tests.

To keep watching the common test suites that you are working on, simply do `npm run watch:browser` or `npm run watch:node`.

## Sinon

[Sinon.JS](http://sinonjs.org/) is also set up for test doubles - see `BatClass.common.js` for examples of both Sinon and Rewire using ES6 classes.

## Coveralls

This library is set up to integrate with Coveralls, and will automatically publish your coverage report to **coveralls.io** if you have created an account there.

Coverage reports are supported both for the browser through Karma, and for the node environment, but only the coverage report generated by Karma are posted to the coveralls.io by default.

## Bublé

[Bublé](https://gitlab.com/Rich-Harris/buble) is a blazing fast, batteries-included ES2015 compiler. Used to bundle your ES2015 files instead of Bable, and also used for the browser tests.

Read the Bublé documentation to get a better understanding about the differences between Bublé and Babel.

## Rollup

[Rollup](http://rollupjs.org/) are used as the library bundler. It bundle down to a cleaner and more lightweight bundle then what you get with for example Webpack and Browserify.

# Known limitations

Babel have been used for browser tests because Bublé and NodeJS doesn't support import / export.

# Known bugs

- The `karma-rollup-preprocessor` published on NPM contains serious bugs. A workaround is to use the `karma-rollup-preprocessor` directly from the Github repo

- Istanbul doesn't support direct export e.g. `export const A = 123;`. There is no workaround atm.


# License

The MIT License (MIT)

Copyright (c) 2016 KFlash

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the 
Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
