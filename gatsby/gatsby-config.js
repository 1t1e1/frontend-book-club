module.exports = {
	plugins: [
		// mui plugins
		"gatsby-plugin-top-layout",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-mui-emotion",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `book`,
				path: `${__dirname}/content/book/`,
			},
		},
		"gatsby-plugin-mdx",
		//
		// image
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
	],
	siteMetadata: {
		title: "My page",
	},
};
