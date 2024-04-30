# is-hyper

> Check if you're running in [Hyper](https://hyper.is)

## Install

```sh
npm install is-hyper
```

## Usage

Here running in Hyper 0.7.0:

```js
import isHyper from 'is-hyper';

isHyper();
//=> true

isHyper('>=0.8');
//=> false
```

## API

### isHyper(semverRange?)

Returns a `boolean`.

#### semverRange

Type: `string`

Match a specific [version range](https://github.com/npm/node-semver#advanced-range-syntax).
