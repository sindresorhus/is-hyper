import process from 'node:process';
import semver from 'semver';

export default function isHyper(semverRange) {
	const {env} = process;

	if (env.TERM_PROGRAM !== 'Hyper' && env.TERM_PROGRAM !== 'HyperTerm') {
		return false;
	}

	if (semverRange) {
		return semver.satisfies(env.TERM_PROGRAM_VERSION, semverRange);
	}

	return true;
}
