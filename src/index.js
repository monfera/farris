import render from './renderers/browser/render';
import renderToString from './renderers/server/renderToString';
import template from './renderers/shared/template';

export default {
	template,
	render,
	renderToString
};