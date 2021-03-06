import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../../components/Link";

export default function Book() {
	return (
		<Container maxWidth="sm">
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h1" gutterBottom>
					Make re-direction to current, last book or homepage.
				</Typography>
				<Link to="/">Go to the main page</Link>
			</Box>
		</Container>
	);
}
