### ES2015 boilerplate for creating libraries with Buble, Rollup and the newest front-end technologies.

[![Build Status](https://travis-ci.org/Kflash/farris.svg?branch=master)](https://travis-ci.org/Kflash/farris)
[![Circle CI](https://circleci.com/gh/Kflash/farris/tree/master.svg?style=svg)](https://circleci.com/gh/Kflash/farris/tree/master)
[![npm version](https://badge.fury.io/js/farris.svg)](https://badge.fury.io/js/farris)
[![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://github.com/kflash/farris/blob/master/LICENSE.md)

## Features

* [Bublé](https://gitlab.com/Rich-Harris/buble) as the ES2015 compiler
* [Rollup](http://rollupjs.org/) for bundling
* [Stub](https://github.com/eventualbuddha/rollup-plugin-stub) let you stub module exports at runtime when bundling with Rollup.
* [Eslint](http://eslint.org/) to maintain a consistent code style
* [Typescript](https://github.com/rollup/rollup-plugin-typescript) support with Rollup and JSX
* [Karma](http://karma-runner.github.io/0.13/index.html) as the test runner
* [ES6 with Babel](http://babeljs.io/) for Mocha tests
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

## Gulp tasks

* `gulp build` - Build task that generates both minified and non-minified scripts
* `gulp build:prod` - Build task that generate a minified script
* `gulp build:dev` - Build task that generate a non-minified script
* `gulp build:common` - Build task that generate a CommonJS bundle
* `gulp lint:src` - Lint the source
* `gulp lint:tests` - Lint the unit tests
* `gulp lint:gulp` - Lint the gulp file
* `gulp clean` - Remove the coverage report - and the *dist* folder
* `gulp coverage` - Run Isparta, a code coverage tool
* `gulp test` - Runs unit tests for both server and the browser
* `gulp test:browser` - Runs the unit tests for browser
* `gulp test:node` - Runs the unit tests on the server
* `gulp karma:phantom` - Runs the unit tests for browser with PhantomJS
* `gulp karma:chrome` - Runs the unit tests for browser with Chrome
* `gulp watch:node` - Run all unit tests for server & watch files for changes
* `gulp watch:browser` - Run all unit tests for browser & watch files for changes
* `gulp watch:chrome` - Run all unit tests for browser with Chrome & watch files for changes
* `gulp watch:phantom` - Run all unit tests for browser with PhantomJS & watch files for changes


## Testing environment

This project uses Mocha to run your unit tests, it uses Karma as the test runner, it enables the feature that you are able to render your tests to the browser (e.g: Firefox, Chrome etc.).

To add a unit test, simply create a `.spec.browser.js` or a `.spec.node.js` file inside the `~../test/browser-tests/` or `~../test/node-tests/` folder. Karma will pick up on these files automatically, and Mocha and Chai will be available within your unit tests without the need to import them.

To run unit tests only for the browser ( *client*), or for the server, create either a `~/.spec.browser.js` or `~/spec.node` file inside the same folder.

To run the tests in the project, just simply `gulp test` for both server and client unit tests, or `gulp test:server`. for server or `gulp test:browser`. for browser tests.

To keep watching the common test suites that you are working on, simply do `gulp watch:browser` or `gulp watch:server`.

**Note!** By default all server tests are run with JSDOM

## Sinon

[Sinon.JS](http://sinonjs.org/) is also set up for test doubles - see `BatClass.common.js` for examples of both Sinon and Rewire using ES6 classes.

## Coveralls

This library is set up to integrate with Coveralls, and will automatically publish your coverage report to **coveralls.io** if you have created an account there.

## Bublé

[Bublé](https://gitlab.com/Rich-Harris/buble) is a blazing fast, batteries-included ES2015 compiler. Used to bundle your ES2015 files instead of Babel.

## Rollup

[Rollup](http://rollupjs.org/) are used as the library bundler. It bundle down to a cleaner and more lightweight bundle then what you get with for example Webpack and Browserify.

# Know limitations

Bublé doesn't support import / export. Therefor Babel have been used for the nodeJS tests. This will be fixed ASAP when nodejS supports import / export.

I suggest read the Bublé documentation to get a better understanding about the differences between Bublé and Babel.


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
