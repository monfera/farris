### ES2015 boilerplate for creating libraries with Bublé

[![Build Status](https://travis-ci.org/Kflash/farris.svg?branch=master)](https://travis-ci.org/Kflash/farris)
[![Circle CI](https://circleci.com/gh/Kflash/farris/tree/master.svg?style=svg)](https://circleci.com/gh/Kflash/farris/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/Kflash/farris/badge.svg?branch=master)](https://coveralls.io/github/Kflash/farris?branch=master)
[![npm version](https://badge.fury.io/js/farris.svg)](https://badge.fury.io/js/farris)
[![npm downloads](https://img.shields.io/npm/dm/farris.svg)](https://www.npmjs.org/package/farris)
[![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://github.com/kflash/farris/blob/master/LICENSE.md)


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
* `npm run test:node` - runs the unit tests in a `Node.js environment`
* `npm run test:all` - runs all unit tests
* `npm run watch:node` - run all unit tests in the node environemnt, and watch files for changes
* `npm run watch:browser` - run all unit tests for browser and watch files for changes
* `npm run watch:chrome` - run all unit tests for browser with Chrome and watch files for changes
* `npm run dependencies:check` - shows a list over dependencies with a higher version number then the current one - if any
* `npm run dependencies:upgrade` - automatically upgrade all devDependencies & dependencies, and update package.json

## Testing environment

This project uses Mocha to run your unit tests, it uses Karma as the test runner, it enables the feature that you are able to render your tests to the browser (e.g: Firefox, Chrome etc.).

To add a unit test, simply create a `.browser.js` or a `.node.js` file inside the `~../test/browser-tests/` or `~../test/node-tests/` folder. Karma will pick up on these files automatically, and Mocha and Chai will be available within your unit tests without the need to import them.

To run unit tests only for the browser, or in a `Node.js environment`, create either a `~/.browser.js` or `~/node` file inside the same folder.

To run the tests in the project, just simply `npm run test` for both the browser and node unit tests, or `npm run test:node`. for the `Node.js environment` or `npm run test:browser`. for browser tests.

To keep watching the common test suites that you are working on, simply do `npm run watch:browser` or `npm run watch:node`.

## Coveralls

This library is set up to integrate with Coveralls, and will automatically send your coverage report to the [coveralls.io](https://coveralls.io/) webpage if you have created an account there.
Coverage report is supported both for Karma and the `Node.js environment` (*Mocha*). Only the report generated by Karma is sent to [coveralls.io](https://coveralls.io/).

## Bublé

[Bublé](https://gitlab.com/Rich-Harris/buble) is a blazing fast, batteries-included ES2015 compiler. Used to bundle your ES2015 files instead of Bable, and also used for the browser tests.

Read the Bublé documentation to get a better understanding about the differences between Bublé and Bable.

## Rollup

[Rollup](http://rollupjs.org/) are used as the library bundler. It bundle down to a cleaner and more lightweight bundle then what you get with for example Webpack and Browserify.

# Known limitations

Babel have been used for browser tests because Bublé and NodeJS doesn't support [`import and export statements`](https://buble.surge.sh/guide/#using-es-modules).
This is more a limitation related to `node.js` then Bublé.

if you're only targeting a `Node.js environment`, and don't want to bundle your modules, you should continue to use `require and exports` if you don't want to use the
`Babel workaround` this boilerplate offer.

If you're targeting browsers instead of (or as well as) `Node.js`, this is not an issue. Everything works with the Karma test runner.

# Known bugs

- The `karma-rollup-preprocessor` published on `NPM` contains serious bugs. A workaround is to use the `karma-rollup-preprocessor` directly from the Github repo.
- Istanbul doesn't support direct export e.g. `export const A = 123;`. There is no workaround at the moment, unless you do:

```js

const foo = {
        a: 123
}
export default foo; // export foo; Note! export const foo = {} give issues too.

```

# FAQ

## What are the benefits of using Bublé instead of Babel?

There are too many of them to be able to mention them all. To name a few:

- There are no plugins or presets – less extensibility, but also zero configuration
- no need for Babel helpers
- lightweigth dependency tree
- Bublé limits itself to ES2015 that can be transpiled to compact, performant ES5
- It's comparatively tiny and many times faster

## Any "*important*" features not supported by Bublé?

It depends entirely on your application. To name a few:

- JSX
- Doesn't support [`import and export statements`](https://buble.surge.sh/guide/#using-es-modules)

## Is there any CI support for Bublé?

Yes, there is.

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
