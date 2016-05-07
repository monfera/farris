/*!
 * chipza v0.0.2
 * (c) 2016 Kflash
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Chipza = factory());
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
	var EMPTY_ARRAY = [];

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

	/**
	 * @param {*} value
	 * @return {boolean}
	 */
	function isVoid(value) {
		return value === null || value === undefined;
	}

	/**
	 * @param {*} value
	 * @return {boolean}
	 */
	function isArray(value) {
		return Array.isArray(value);
	}

	/**
	 * @param {*} value
	 * @return {boolean}
	 */
	function isDynamic(value) {
		return value !== undefined && value.index_ !== undefined;
	}

	function compileTree() {

		if (!isVoid(node)) {
			var keyIndex = NULL_INDEX;
			var nodeIndex = isRoot ? ROOT_NODE_INDEX : NULL_INDEX;
			var create;
			var update;
			var destroy;

			var tag = node.tag;

			if (tag) {

				var key = node.key;
				var element = document.createTextNode(tag);

				if (isDynamic(key)) {
					keyIndex = key.index_;
				}

				var enhancers = [];
				var updaters = [];
				var destroyers = [];


				if ((updaters.length > 0 || destroyers.length > 0) && nodeIndex === NULL_INDEX) {
					nodeIndex = offset.i++;
				}

				var text = node.text;

				if (!isVoid(text)) {

					if (isDynamic(text)) {
						enhancers.push(enhanceTextContent(text));
						if (nodeIndex === NULL_INDEX) {
							nodeIndex = offset.i++;
						}
						updaters.push(updateTextContent(text));
					} else {
						element.textContent = text;
					}
				} else {

					var children = node['children'];
					if (!isNullOrUndef(children)) {
						if (!isArray(children)) {
							children = [children]; // TODO better not
						}
						for (var i = 0; i < children.length; i++) {
							var childTree = compileTree(children[i], false, offset);
							if (childTree) {
								enhancers.push(childTree.create);
								if (childTree.update) {
									updaters.push(childTree.update);
								}
								if (childTree.destroy) {
									destroyers.push(childTree.destroy);
								}
							} else {
								// TODO error
							}
						}
					}
				}
				create = combineCreate(nodeIndex, createElement(tag), enhancers);
				update = combineUpdate(nodeIndex, updaters);
				destroy = combineDestroy(nodeIndex, destroyers);
			} else if (isDynamic(node)) {
				create = enhanceExpression(node);
				update = updateExpression(node);
				destroy = null;
			} else {
				create = combineCreate(nodeIndex, createTextNode(node), EMPTY_ARRAY);
				update = combineUpdate(nodeIndex, EMPTY_ARRAY);
				destroy = null;
			}

			return new Tree(keyIndex, create, update, destroy);
		}
	}

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