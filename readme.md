# is-hyperterm [![Build Status](https://travis-ci.org/sindresorhus/is-hyperterm.svg?branch=master)](https://travis-ci.org/sindresorhus/is-hyperterm)

> Check if you're running in [HyperTerm](https://hyperterm.org)


## Install

```
$ npm install --save is-hyperterm
```


## Usage

Here running in HyperTerm 0.6.0:

```js
const isHyperterm = require('is-hyperterm');

isHyperterm();
//=> true

isHyperterm('>=0.7');
//=> false
```


## API

### isHyperterm([semverRange])

Returns a `boolean`.

#### semverRange

Type: `string`

Match a specific [version range](https://github.com/npm/node-semver#advanced-range-syntax).


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
