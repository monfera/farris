/*!
 * farris v0.1.0
 * (c) 2016 KFlash
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Farris = factory());
}(this, function () { 'use strict';

	function render() {}

	function renderToString(schema) {
		if (schema) {
			return schema.renderToString(schema);
		}
	}

	function Variable(index) {
		this.index_ = index;
	}

	Variable.prototype.get = function() {
		return currentItem.read(this.index_);
	};

	var NULL_INDEX = -1;
	var ROOT_NODE_INDEX = -2;

	function Schema(tree, key, v0, v1) {
		this.tree_ = tree;
		this.key_ = key;
		this.rootNode = null;
		this.v0 = v0;
		this.v1 = v1;
	}

	Schema.prototype.read = function(index) {
		var value;
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

	function compileTree() {}

	function template(templateFunction) {
		var parameters = [];
		var parameterCount = templateFunction.length;
		for (var i = 0; i < parameterCount; i++) {
			parameters.push(new Variable(i));
		}

		var node = templateFunction.apply(void 0, parameters);
		var tree = compileTree(node, true, {i: parameterCount});
		var keyIndex = tree.keyIndex;

		switch (parameterCount) {
			case 0:
				return function() {
					return new Schema(tree, null);
				};
			case 1:
				if (keyIndex === 0) {
					return function(v0) {
						return new Schema(tree, v0, v0);
					};
				} else {
					return function(v0) {
						return new Schema(tree, null, v0);
					};
				}
			default:
				return function(v0) {
					var arguments$1 = arguments;

					var key = (keyIndex !== NULL_INDEX) ? arguments[keyIndex] : null;
					var array = [];
					for (var i = 1; i < arguments$1.length; i++) {
						array.push(arguments$1[i]);
					}
					return new Schema(tree, key, v0, array);
				};
		}
	}

	var index = {
		template: template,
		render: render,
		renderToString: renderToString
	};

	return index;

}));