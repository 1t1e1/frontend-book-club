import { Box, Divider, Typography } from "@mui/material";

function CountDownPart({ text, count }) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				ml: 2,
			}}
		>
			<Typography
				variant="span"
				sx={{
					textAlign: "center",
					color: "#fff",
				}}
			>
				{text}
			</Typography>
			<Typography
				variant="h4"
				sx={{
					textAlign: "center",
					color: "#fff",
				}}
			>
				{count}
			</Typography>
		</Box>
	);
}

export default function CountDown() {
	return (
		<Box
			sx={{
				display: "flex",
				// flexDirection: "column",
			}}
		>
			<CountDownPart text="DAYS" count="03" />
			<CountDownPart text="HOURS" count="13" />
			<CountDownPart text="MINUTES" count="13" />
		</Box>
	);
}
