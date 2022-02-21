import { Card } from "@mui/material";
import styled from "@emotion/styled";

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
		border: "2px solid red",
		backgroundColor: "black",
		opacity: 0.6,
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
				<CoverStyle src={"/static/images/homepageCover.jpg"}></CoverStyle>
			</CardMediaStyle>
		</Card>
	);
}
