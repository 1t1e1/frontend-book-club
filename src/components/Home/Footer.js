import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

function ScrollTop({ children, ...props }) {
	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector(
			"#back-to-top-anchor"
		);

		if (anchor) {
			anchor.scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
		}
	};

	return (
		<Button
			onClick={handleClick}
			role="presentation"
			aria-label="scroll back to top"
			{...props}
		>
			{children}
		</Button>
	);
}

const FooterRoot = styled("div")(({ theme }) => ({
	backgroundColor: "black",
	opacity: 0.6,
	height: "300px",
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
}));

export default function Footer({ index }) {
	return (
		<FooterRoot
			sx={{
				clipPath:
					index % 2
						? "polygon(0 0, 100%  30px, 100% 100%, 0% 100%)"
						: "polygon(0 30px, 100% 0, 100% 100%, 0% 100%)",
				mt: 3,
			}}
		>
			<Typography variant="h4" sx={{ color: "white" }}>
				Join US
			</Typography>
			<ScrollTop
				disableRipple
				endIcon={<ArrowUpwardIcon />}
				sx={{ color: "white" }}
			>
				Arrow to Up
			</ScrollTop>
		</FooterRoot>
	);
}
