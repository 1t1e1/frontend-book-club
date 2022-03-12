import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { Grid, Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/system";

import Link from "../Link";

const CoverStyle = styled("img")(({ theme }) => ({
	top: "-60px",
	position: "absolute",
	height: "390px",
	boxShadow: theme.shadows[13],
}));

export default function BookCard({ book, image, index }) {
	const { author, description, title, subtitle } = book.frontmatter;

	return (
		<Grid item xs={12}>
			<Card
				elevation={0}
				sx={{
					backgroundColor: "#abdecd",
					zIndex: 3,
					position: "relative",
					overflow: "visible",
					pb: 4,
					borderRadius: index % 2 ? "0px 10px 10px 0" : "10px 0px 0px 10px",
					"&::before": {
						position: "absolute",
						zIndex: -1,
						// backgroundColor: "#eda",
						backgroundColor: "#abdecd",
						top: "-28px",
						content: "''",
						height: "30px",
						width: "100%",
						clipPath:
							index % 2
								? "polygon(0 100%, 100% 100%, 0 0)"
								: "polygon(0 100%, 100% 0, 100% 100%)",
					},
					"&::after": {
						position: "absolute",
						zIndex: -1,
						backgroundColor: "#abdecd",
						bottom: "-28px",
						content: "''",
						height: "30px",
						width: "100%",
						clipPath:
							index % 2
								? "polygon(0 100%, 100% 0, 0 0)"
								: "polygon(0 0, 100% 0, 100% 100%)",
					},
				}}
			>
				<Grid
					container
					spacing={1}
					sx={{
						justifyContent: "space-evenly",
						flexDirection: index % 2 ? "row" : "row-reverse",
					}}
				>
					<Grid
						item
						xs={8}
						md={3}
						sx={{
							height: "350px",
							position: "relative",
						}}
					>
						{/* <CoverStyle
							sx={{
								...(index % 2
									? {
											left: "0em",
									  }
									: {
											right: "0em",
									  }),
							}}
							src={cover}
						/> */}
						<GatsbyImage
							alt={`image of ${title}`}
							image={image}
							maxWidth="100px"
						/>
					</Grid>
					<Grid item xs={8} md={6} sx={{}}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly",
								height: "max(100%,220px)",
							}}
						>
							<Typography
								variant="h3"
								sx={{
									textAlign: "center",
								}}
							>
								<Link to={`/book/${book.slug}`} color="secondary">
									{title}
								</Link>
							</Typography>

							<Typography
								variant="h5"
								sx={{
									textAlign: "center",
								}}
							>
								{subtitle}
							</Typography>

							<Typography
								variant="h4"
								sx={{
									textAlign: "center",
								}}
							>
								{author}
							</Typography>
							<Typography
								variant="body1"
								sx={{
									mx: "auto",
									mt: 1,
									mb: 5,
									textAlign: "center",
									maxWidth: "80%",
								}}
							>
								{description}
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Card>
		</Grid>
	);
}
