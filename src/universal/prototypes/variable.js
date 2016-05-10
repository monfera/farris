function Variable(index) {
	this.index_ = index;
}

Variable.prototype.get = function() {
	return currentItem.read(this.index_);
};

export default Variable;