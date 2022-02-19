import { Grid, Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/system";

const CoverStyle = styled("img")(({ theme }) => ({
	margin: "auto",
	[theme.breakpoints.up("sm")]: {
		margin: "2em",
	},
	// right: 0,
	top: "-70px",
	position: "absolute",
	height: "390px",
	// minWidth: "150px",
	// maxWidth: "350px",
	boxShadow: theme.shadows[11],
}));

export default function BookCard({ book, index }) {
	const { author, cover, description, id, title } = book;
	console.log(book);
	return (
		<Grid item xs={12}>
			<Card
				elevation={0}
				sx={{
					backgroundColor: "#abdecd",
					// height: "max(400px,100%)",
					zIndex: 3,
					position: "relative",
					overflow: "visible",
					borderRadius: index % 2 ? "0px 10px 10px 0" : "10px 0px 0px 10px",
					"&::before": {
						position: "absolute",
						zIndex: -3,
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
						zIndex: -3,
						// backgroundColor: "#1cd",
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
				<CoverStyle
					sx={{
						...(index % 2
							? {
									left: "2em",
							  }
							: {
									right: "2em",
							  }),
					}}
					src={cover}
				/>
				<Grid
					container
					spacing={1}
					sx={{
						justifyContent: "space-evenly",
						flexDirection: index % 2 ? "row" : "row-reverse",
						// flexWrap: "nowrap",
						// flexDirection: "row-reverse",
					}}
				>
					<Grid
						item
						xs={12}
						md={4}
						sx={{
							height: "350px",
						}}
					></Grid>
					<Grid item xs={12} md={6}>
						<Box
							sx={{
								mx: 2,
								p: 2,
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly",
								height: "100%",
							}}
						>
							<Typography
								variant="h4"
								sx={{
									textAlign: "center",
								}}
							>
								{title}
							</Typography>

							<Typography
								variant="h5"
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
									my: 3,
									textAlign: "center",
									maxWidth: "80%",
									// flexGrow: 1,
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
