import * as React from "react";

import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Layout from "../components/Layout";
import { Jumbotron, BookCard, Footer } from "../components/HomePage";

export default function Index({ data }) {
	return (
		<Layout>
			<Jumbotron />

			<Container maxWidth="lg">
				<Grid
					container
					spacing={6}
					sx={{
						overflow: "hidden",
					}}
				>
					{data.allMdx.edges.map(({ node }, index) => {
						const image = getImage(node.frontmatter.cover?.childImageSharp);

						return (
							<BookCard image={image} book={node} key={index} index={index} />
						);
					})}
				</Grid>
			</Container>

			<Footer />
		</Layout>
	);
}

export const query = graphql`
	query GetBookList {
		allMdx(sort: { order: DESC, fields: frontmatter___date }) {
			edges {
				node {
					id
					slug
					frontmatter {
						title
						subtitle
						author
						description
						cover {
							childImageSharp {
								gatsbyImageData(height: 340)
							}
						}
					}
				}
			}
		}
	}
`;
