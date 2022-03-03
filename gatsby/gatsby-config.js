module.exports = {
	plugins: [
		"gatsby-plugin-top-layout",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-mui-emotion",
		// mui plugins
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `book`,
				path: `${__dirname}/src/pages/`,
			},
		},
		`gatsby-plugin-mdx`,
	],
	siteMetadata: {
		title: "My page",
	},
};
