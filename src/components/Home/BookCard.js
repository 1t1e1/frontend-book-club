import { Grid, Box, Card } from "@mui/material";
import { styled } from "@mui/system";

const CoverStyle = styled("img")(({ theme }) => ({
	margin: "2em",
	right: 0,
	top: "-110px",
	position: "absolute",
	width: "300px",
	// minWidth: "150px",
	// maxWidth: "350px",
	boxShadow: theme.shadows[11],
}));

export default function BookCard({ book, index }) {
	console.log(book);
	return (
		<Grid item xs={12}>
			<Card
				elevation={0}
				sx={{
					backgroundColor: "#abdecd",
					height: "400px",
					zIndex: 3,
					position: "relative",
					overflow: "visible",
					borderRadius: `${
						index % 2 ? "0px 10px 10px 0" : "10px 0px 0px 10px"
					}`,
					"&::before": {
						position: "absolute",
						zIndex: -3,
						// backgroundColor: "#eda",
						backgroundColor: "#abdecd",
						top: "-28px",
						content: "''",
						height: "30px",
						width: "100%",
						clipPath: `${
							index % 2
								? "polygon(0 100%, 100% 100%, 0 0)"
								: "polygon(0 100%, 100% 0, 100% 100%)"
						}`,
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
						clipPath: `${
							index % 2
								? "polygon(0 100%, 100% 0, 0 0)"
								: "polygon(0 0, 100% 0, 100% 100%)"
						}`,
					},
				}}
			>
				<CoverStyle
					sx={{
						...(index % 2
							? {
									left: 0,
							  }
							: {
									right: 0,
							  }),
					}}
					src={book.cover}
				/>
			</Card>
		</Grid>
	);
}
