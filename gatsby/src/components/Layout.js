import React from "react";

import { Box } from "@mui/material";

// import SEO from "./components/seo";

export default function Layout({ title = "", children, ...other }) {
	return (
		<Box {...other}>
			{/* <SEO title="File list" />
      - [ ] Make helmet with title prop etc */}
			{children}
		</Box>
	);
}
