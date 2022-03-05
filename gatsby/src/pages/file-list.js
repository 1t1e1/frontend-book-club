// src/pages/file-list.js
import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
// import SEO from "../components/seo";

const FileListPage = ({ data }) => {
	console.log(data);

	return (
		<Layout>
			{/* <SEO title="File list" /> */}
			<h1>Hi from the file list page</h1>
			<p>Welcome to the file list page</p>
			<hr></hr>

			<table>
				<thead>
					<tr>
						<th>Relative path</th>
						<th>Created</th>
						<th>Modified</th>
						<th>Extension</th>
						<th>Pretty size</th>
					</tr>
				</thead>
				<tbody>
					{data.allFile.edges.map(({ node }, index) => (
						<tr key={index}>
							<td>{node.relativePath}</td>
							<td>{node.birthTime}</td>
							<td>{node.modifiedTime}</td>
							<td>{node.extension}</td>
							<td>{node.prettySize}</td>
						</tr>
					))}
				</tbody>
			</table>

			<hr></hr>
			<Link to="/">Go back to the homepage</Link>
		</Layout>
	);
};

export const query = graphql`
	query MyQuery {
		allFile {
			edges {
				node {
					relativePath
					birthTime(fromNow: true)
					modifiedTime(fromNow: true)
					extension
					prettySize
				}
			}
		}
	}
`;

export default FileListPage;
