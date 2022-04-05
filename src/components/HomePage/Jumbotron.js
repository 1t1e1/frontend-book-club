import React, { useState, useEffect } from "react";

import { StaticImage } from "gatsby-plugin-image";

import { Box, Typography, Container } from "@mui/material";

import Link from "../Link";

export default function Jumbotron() {
	const [scroll, setScroll] = useState(0);

	const listenScrollEvent = (event) => {
		const scrollY = window.scrollY;

		if (scrollY < 300) {
			return setScroll(scrollY / 300);
		} else if (window.scrollY > 300) {
			return setScroll(1);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		return () => window.removeEventListener("scroll", listenScrollEvent);
	}, []);

	return (
		<Box>
			<StaticImage
				id="ref-for-scrolling-back"
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
						justifyContent: "end",
					}}
				>
					<Typography
						// variant="h3"
						component="h1"
						sx={{
							m: 2,
							width: "100px",
							WebkitTextStrokeWidth: "1px",
							WebkitTextStrokeColor: "#fff",
						}}
					>
						there will be CountDown
					</Typography>
				</Box>
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
						style={{
							transition: "1.1s cubic-bezier(0, 0, 0.27, 0.88)",
							transform: `translateX(calc(1.7em - 3em*${scroll}))`,
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
						style={{
							transition: "1.5s cubic-bezier(0, 0, 0.27, 0.88)",
							transform: `translateX(calc(1.2em + 2em*${scroll}))`,
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
						style={{
							transition: "2s cubic-bezier(0, 0, 0.27, 0.88)",
							transform: `translateX(calc(0.5em - 2em*${scroll}))`,
						}}
					>
						Book Club
					</Typography>
				</Box>
			</Container>
		</Box>
	);
}
