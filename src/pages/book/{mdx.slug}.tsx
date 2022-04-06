import React from "react";

import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import { Grid, Box } from "@mui/material";

import components from "../../components/Book/MdxComponent";

export default function BookDetail({ data }) {
	const { author, description, title, subtitle, cover } = data.mdx.frontmatter;
	const image = getImage(cover.childImageSharp.gatsbyImageData);

	return (
		<Box
			sx={{
				px: 5,
				py: 10,
			}}
		>
			<Grid container spacing={3} justifyContent="space-evenly">
				<Grid item sm={3} md={3}>
					<Box sx={{ mt: 5 }}>
						<GatsbyImage alt={`image of `} image={image} />
					</Box>
				</Grid>
				<Grid item sm={9} md={8}>
					<h1>{title}</h1>
					<h5>{subtitle}</h5>
					<h3>{author}</h3>
					<p>{description}</p>
				</Grid>
			</Grid>

			<Grid
				item
				sm={12}
				sx={{
					mt: 3,
					mx: { xs: 0, sm: 3, md: 6 },
				}}
			>
				<MDXProvider components={components}>
					<MDXRenderer>{data.mdx.body}</MDXRenderer>
				</MDXProvider>
			</Grid>
		</Box>
	);
}

export const query = graphql`
	query ($slug: String) {
		mdx(slug: { eq: $slug }) {
			body
			mdxAST
			frontmatter {
				author
				description
				title
				subtitle
				cover {
					absolutePath
					childImageSharp {
						gatsbyImageData(height: 390)
					}
				}
			}
		}
	}
`;
