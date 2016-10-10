# is-hyper [![Build Status](https://travis-ci.org/sindresorhus/is-hyper.svg?branch=master)](https://travis-ci.org/sindresorhus/is-hyper)

> Check if you're running in [Hyper](https://hyper.is)


## Install

```
$ npm install --save is-hyper
```


## Usage

Here running in Hyper 0.7.0:

```js
const isHyper = require('is-hyper');

isHyper();
//=> true

isHyper('>=0.8');
//=> false
```


## API

### isHyper([semverRange])

Returns a `boolean`.

#### semverRange

Type: `string`

Match a specific [version range](https://github.com/npm/node-semver#advanced-range-syntax).


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
