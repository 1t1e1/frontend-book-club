import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../components/ProTip";
import Link from "../components/Link";
import Copyright from "../components/Copyright";

export default function Index() {
	return (
		<Container maxWidth="sm">
			<Box sx={{ my: 4, border: 1 }}>
				<Box sx={{ my: 4, border: 1 }}>
					<Typography variant="h4" component="h1" gutterBottom>
						Gatsby example
					</Typography>
					<Link to="/about" color="secondary">
						Go to the about page
					</Link>
					<ProTip />
					<Copyright />
				</Box>
			</Box>
		</Container>
	);
}
