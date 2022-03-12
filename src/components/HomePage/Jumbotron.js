import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";

export default function Jumbotron() {
	return (
		<Box>
			<StaticImage
				alt="Home page cover image"
				src="../statics/homepageCover.jpg"
				style={{
					height: "24em",
					position: "absolute",
				}}
				imgStyle={{
					clipPath: "polygon(0% 0%, 100% 0, 100%  calc(100% - 30px), 0% 100%)",
					// better clipPath: "polygon(0% 0%, 100% 0, 100%  calc(100% - 9vw), 0% 100%)",
				}}
			/>
			<Box
				sx={{
					clipPath: "polygon(0% 0%, 100% 0, 100%  calc(100% - 30px), 0% 100%)",
					zIndex: 9,
					width: "100%",
					height: "24em",
					backgroundColor: "black",
					opacity: 0.7,
					position: "absolute",
				}}
			/>
			<Container
				maxWidth="lg"
				sx={{
					zIndex: 19,
					position: "relative",
					height: "24em",
					mb: 4,
				}}
			>
				<Typography
					variant="h2"
					component="h1"
					sx={{
						WebkitTextStrokeWidth: "1px",
						WebkitTextStrokeColor: "#fff",
					}}
				>
					Join
				</Typography>
				<Typography
					variant="h2"
					component="h1"
					sx={{
						color: "#fff",
					}}
				>
					FrontEnd
				</Typography>
				<Typography
					variant="h2"
					component="h1"
					sx={{
						color: "#fff",
					}}
				>
					Book Club
				</Typography>
			</Container>
		</Box>
	);
}
