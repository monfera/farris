### ES2015 boilerplate for creating libraries with Buble, Rollup and the newest front-end technologies.

[![Build Status](https://travis-ci.org/Kflash/farris.svg?branch=master)](https://travis-ci.org/Kflash/farris)
[![Coverage Status](https://coveralls.io/repos/github/Kflash/farris/badge.svg?branch=master)](https://coveralls.io/github/Kflash/farris?branch=master)
[![npm version](https://badge.fury.io/js/farris.svg)](https://badge.fury.io/js/farris)
[![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://github.com/kflash/farris/blob/master/LICENSE.md)
[![npm downloads](https://img.shields.io/npm/dm/farris.svg)](https://www.npmjs.org/package/farris)

## Features

* [Bublé](https://gitlab.com/Rich-Harris/buble) as the ES2015
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
