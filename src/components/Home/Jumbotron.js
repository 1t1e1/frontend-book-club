import { Card, Box, CardContent, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";

import CountDown from "./CountDown";

const CoverStyle = styled("img")(({ theme }) => ({
	width: "100%",
	height: "60vh",
	objectFit: "cover",
}));

const CardMediaStyle = styled("div")(({ theme }) => ({
	clipPath: "polygon(0% 0%, 100% 0, 100%  calc(100% - 30px), 0% 100%)",
	"&:after": {
		zIndex: 9,
		content: "''",
		width: "100%",
		height: "100%",
		position: "absolute",
		top: 0,
		left: 0,
		backgroundColor: "black",
		opacity: 0.7,
	},
}));

export default function Jumbotron() {
	return (
		<Card
			elevation={0}
			sx={{
				position: "relative",
				mb: "1em",
			}}
		>
			<CardMediaStyle>
				<CoverStyle
					src={"/static/images/homepageCover.jpg"}
					id="back-to-top-anchor"
				></CoverStyle>
			</CardMediaStyle>

			<CardContent
				sx={{
					zIndex: 19,
					top: "10%",
					position: "absolute",
					p: 0,
					// border: "2px solid white",
					// marginLeft: "3em",
					width: "100%",
				}}
			>
				<Container maxWidth="lg">
					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-end",
						}}
					>
						<CountDown></CountDown>
					</Box>

					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						<Typography
							variant="h1"
							sx={{
								// textAlign: "end",
								color: "#fff",
							}}
						>
							Join
						</Typography>
						<Typography
							variant="h1"
							sx={{
								// textAlign: "end",
								color: "#fff",
							}}
						>
							FrontEnd
						</Typography>
						<Typography
							variant="h1"
							sx={{
								// textAlign: "end",
								color: "#fff",
							}}
						>
							Book Club
						</Typography>
					</Box>
				</Container>
			</CardContent>
		</Card>
	);
}
