import * as React from "react";

import { graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ProTip from "../components/ProTip";
import Link from "../components/Link";
import Copyright from "../components/Copyright";

export default function Index({ data }) {
	return (
		<Container maxWidth="sm">
			<StaticImage
				alt="Home page cover image"
				src="../statics/homepageCover.jpg"
			/>
			<Box sx={{ my: 4 }}>
				<Box sx={{ my: 4 }}>
					<Typography variant="h4" component="h1" gutterBottom>
						Book List
					</Typography>
					<List>
						{data.allMdx.edges.map(({ node }, index) => {
							const image = getImage(node.frontmatter.cover?.childImageSharp);

							return (
								<ListItem key={index}>
									<Link to={`/book/${node.slug}`} color="secondary">
										{node.frontmatter.title}
									</Link>
									<GatsbyImage image={image} maxWidth="100px" />
								</ListItem>
							);
						})}
					</List>
					<ProTip />
					<Copyright />
				</Box>
			</Box>
		</Container>
	);
}

export const query = graphql`
	query GetBookList {
		allMdx {
			edges {
				node {
					id
					slug
					frontmatter {
						title
						author
						cover {
							childImageSharp {
								gatsbyImageData(height: 100)
							}
						}
					}
				}
			}
		}
	}
`;
