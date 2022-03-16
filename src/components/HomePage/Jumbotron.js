import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { Box, Typography, Container } from "@mui/material";

import Link from "../Link";

export default function Jumbotron() {
	return (
		<Box>
			<StaticImage
				alt="Home page cover image"
				src="../../statics/homepageCover.jpg"
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
					zIndex: 1,
					position: "relative",
					height: "24em",
					mb: 4,
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Link
						to="https://join.slack.com/t/frontendbookclub/shared_invite/zt-ev3ml2vp-ss4go7hQ9B7N4cb5caLFLQ"
						color="inherit"
						underline="none"
						variant="subtitle1"
						sx={{
							WebkitTextStrokeWidth: "1px",
							WebkitTextStrokeColor: "#fff",
						}}
					>
						SLACK
					</Link>
					<Link
						to="https://us04web.zoom.us/j/3299336592?pwd=V1pqNk5EWUFqTkFtN2JzWk1DMjZVZz09"
						color="inherit"
						underline="none"
						variant="subtitle1"
						sx={{
							WebkitTextStrokeWidth: "1px",
							WebkitTextStrokeColor: "#fff",
							ml: 4,
						}}
					>
						ZOOM
					</Link>
				</Box>
				<Box>
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
				</Box>
			</Container>
		</Box>
	);
}
