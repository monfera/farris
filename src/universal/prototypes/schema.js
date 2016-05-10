 import { ROOT_NODE_INDEX } from '../../renderers/shared/constants';

function Schema(tree, key, v0, v1) {
	this.tree_ = tree;
	this.key_ = key;
	this.rootNode = null;
	this.v0 = v0;
	this.v1 = v1;
}

Schema.prototype.read = function(index) {
	let value;
	if (index === ROOT_NODE_INDEX) {
		value = this.rootNode;
	} else if (index === 0) {
		value = this.v0;
	} else {
		value = this.v1[index - 1];
	}
	return value;
};

Schema.prototype.write = function(index, value) {

	if (index === ROOT_NODE_INDEX) {
		value = this.rootNode;
	} else if (index === 0) {
		value = this.v0;
	} else {
		value = this.v1[index - 1];
	}
	return value;
};


export default Schema;