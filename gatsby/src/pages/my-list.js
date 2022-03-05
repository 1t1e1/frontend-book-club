// src/pages/file-list.js
import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import { List, ListItem } from "@mui/material";
// import SEO from "../components/seo";

const FileListPage = ({ data }) => {
	console.log(data);

	return (
		<Layout>
			{/* <SEO title="File list" /> */}
			<h1>Hi This is my list </h1>
			<p>Welcome to the file list page</p>
			<hr></hr>

			<List>
				<ListItem>First</ListItem>
				<ListItem>Second</ListItem>
			</List>

			<hr></hr>

			<List>
				{data.allFile.edges.map(({ node }, index) => (
					<ListItem key={index}>
						{node.relativePath}
						<p>what|{node.relativePath}</p>
					</ListItem>
				))}
			</List>

			<hr></hr>
			<Link to="/">Go back to the homepage</Link>
		</Layout>
	);
};

export const query = graphql`
	query allFileList {
		allFile {
			edges {
				node {
					id
					name
					relativePath
					relativeDirectory
				}
			}
		}
	}
`;

export default FileListPage;
