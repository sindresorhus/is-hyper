import process from 'node:process';
import test from 'ava';
import isHyper from './index.js';

test('main', t => {
	t.false(isHyper());
	process.env.TERM_PROGRAM = 'Hyper';
	process.env.TERM_PROGRAM_VERSION = '0.6.0';
	t.true(isHyper());
	t.true(isHyper('0.6.0'));
	t.false(isHyper('>=1'));
});
