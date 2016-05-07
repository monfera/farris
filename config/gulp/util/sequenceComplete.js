function sequenceComplete(done) {
	return (err) => {
		if (err) {
			var error = new Error('build sequence failed');
			error.showStack = false;
			done(error);
		} else {
			done();
		}
	};
}

export default sequenceComplete;