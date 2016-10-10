'use strict';
const semver = require('semver');

module.exports = semverRange => {
	const env = process.env;

	if (env.TERM_PROGRAM !== 'Hyper' && env.TERM_PROGRAM !== 'HyperTerm') {
		return false;
	}

	if (semverRange) {
		return semver.satisfies(env.TERM_PROGRAM_VERSION, semverRange);
	}

	return true;
};
