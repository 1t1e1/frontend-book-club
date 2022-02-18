import { Helmet } from "react-helmet-async";

import { Box } from "@mui/material";

export default function Page({ children, title = "", ...other }) {
	return (
		<Box {...other}>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			{children}
		</Box>
	);
}
