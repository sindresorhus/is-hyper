import test from 'ava';
import m from './';

test(t => {
	t.false(m());
	process.env.TERM_PROGRAM = 'HyperTerm';
	process.env.TERM_PROGRAM_VERSION = '0.6.0';
	t.true(m());
	t.true(m('0.6.0'));
	t.false(m('>=1'));
});
