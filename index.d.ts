/**
Check if you're running in [Hyper](https://hyper.is).

@param semverRange - Match a specific [version range](https://github.com/npm/node-semver#advanced-range-syntax).

@example
```
import isHyper from 'is-hyper';

isHyper();
//=> true

isHyper('>=0.8');
//=> false
```
*/
export default function isHyper(semverRange?: string): boolean;
