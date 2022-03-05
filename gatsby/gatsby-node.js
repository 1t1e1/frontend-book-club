// const { createFilePath } = require(`gatsby-source-filesystem`);

// exports.onCreateNode = ({ node, getNode, actions }) => {
// 	const { createNodeField } = actions;

// 	if (node.internal.type === `mdx`) {
// 		const slug = createFilePath({ node, getNode, basePath: `books` });
// 		createNodeField({
// 			node,
// 			name: `slug`,
// 			value: slug,
// 		});
// 	}
// };
