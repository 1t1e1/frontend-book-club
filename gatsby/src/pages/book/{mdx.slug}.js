import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { MDXRenderer } from "gatsby-plugin-mdx";

export const query = graphql`
	query ($slug: String) {
		mdx(slug: { eq: $slug }) {
			body
			mdxAST
			frontmatter {
				author
				description
				title
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

export default function BookDetail({ data }) {
	return (
		<div>
			Book detail page
			<h1>Title: {data.mdx.frontmatter.title}</h1>
			<p>Description: {data.mdx.frontmatter.description}</p>
			<h5>author: {data.mdx.frontmatter.author}</h5>
			<GatsbyImage
				image={data.mdx.frontmatter.cover.childImageSharp.gatsbyImageData}
			/>
			<div>
				<MDXRenderer>{data.mdx.body}</MDXRenderer>
			</div>
		</div>
	);
}
