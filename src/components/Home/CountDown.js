import Countdown from "react-countdown";
import { Box, Typography } from "@mui/material";

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

const Completionist = () => (
	<Typography
		variant="h4"
		sx={{
			textAlign: "center",
			color: "#fff",
		}}
	>
		You are good to go!
	</Typography>
);

const renderer = ({ days, hours, minutes, seconds, completed }) => {
	if (completed) {
		return <Completionist />;
	} else {
		return (
			<Box
				sx={{
					display: "flex",
				}}
			>
				<CountDownPart text="DAYS" count={days} />
				<CountDownPart text="HOURS" count={hours} />
				<CountDownPart text="MINUTES" count={minutes} />
				<CountDownPart text="SECONDS" count={seconds} />
			</Box>
		);
	}
};

const CountdownComponent = ({ date = Date.now() + 500000001 }) => (
	<Countdown date={date} renderer={renderer} />
);

export default CountdownComponent;
