import Variable from '../../universal/prototypes/variable';
import Schema from '../../universal/prototypes/schema';
import compileTree from './compileTree';
import { NULL_INDEX } from './constants';

function template(templateFunction) {
	let parameters = [];
	let parameterCount = templateFunction.length;
	for (let i = 0; i < parameterCount; i++) {
		parameters.push(new Variable(i));
	}

	let node = templateFunction(...parameters);
	let tree = compileTree(node, true, {i: parameterCount});
	let keyIndex = tree.keyIndex;

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
				let key = (keyIndex !== NULL_INDEX) ? arguments[keyIndex] : null;
				let array = [];
				for (let i = 1; i < arguments.length; i++) {
					array.push(arguments[i]);
				}
				return new Schema(tree, key, v0, array);
			};
	}
}
export default template;