import { Grid, Box, Card } from "@mui/material";
import { styled } from "@mui/system";

const CoverStyle = styled("img")(({ theme }) => ({
	right: 0,
	top: "-10px",
	position: "absolute",
	height: "100px",
	width: "100px",
	boxShadow: theme.shadows[11],
}));

export default function BookCard({ book, index }) {
	console.log(book);
	return (
		<Grid item xs={12}>
			<Card
				sx={{
					backgroundColor: "#abdecd",
					border: 1,
					height: "200px",
					position: "relative",
					overflow: "visible",
				}}
			>
				<CoverStyle src={book.cover} />
			</Card>
		</Grid>
	);
}
