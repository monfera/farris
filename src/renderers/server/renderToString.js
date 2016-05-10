function renderToString(schema) {
	if (schema) {
		return schema.renderToString(schema);
	}
}
export default renderToString;