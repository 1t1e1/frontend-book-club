import React from "react";
import { graphql } from "gatsby";

import { MDXRenderer } from "gatsby-plugin-mdx";

export const query = graphql`
	query ($slug: String = "") {
		mdx(slug: { eq: $slug }) {
			body
			mdxAST
			frontmatter {
				author
				description
				title
			}
		}
	}
`;

export default function BookDetail({ data }) {
	console.log("data from book id", data.mdx.mdxAST);
	return (
		<div>
			Book detail page
			<h1>Title: {data.mdx.frontmatter.title}</h1>
			<p>Description: {data.mdx.frontmatter.description}</p>
			<h5>author: {data.mdx.frontmatter.author}</h5>
			<div>
				<MDXRenderer>{data.mdx.body}</MDXRenderer>
			</div>
		</div>
	);
}
