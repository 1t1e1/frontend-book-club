import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { Box } from "@mui/material";

export default function Jumbotron() {
	return (
		<>
			<StaticImage
				alt="Home page cover image"
				src="../statics/homepageCover.jpg"
				style={{
					height: "14em",
					position: "absolute",
				}}
				imgStyle={{
					objectFit: "cover",
					clipPath: "polygon(0% 0%, 100% 0, 100%  calc(100% - 30px), 0% 100%)",
				}}
			/>
			<Box
				sx={{
					clipPath: "polygon(0% 0%, 100% 0, 100%  calc(100% - 30px), 0% 100%)",
					zIndex: 9,
					width: "100%",
					height: "14em",
					position: "relative",
					backgroundColor: "black",
					opacity: 0.7,
					mb: 4,
				}}
			></Box>
		</>
	);
}
