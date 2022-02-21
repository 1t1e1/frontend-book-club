import { styled } from "@mui/system";

const FooterRoot = styled("div")(({ theme }) => ({
	backgroundColor: "black",
	opacity: 0.6,
	height: "300px",
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
		></FooterRoot>
	);
}
