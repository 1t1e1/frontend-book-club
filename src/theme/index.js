import { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import typography from "./typography";

export default function ThemeConfig({ children }) {
	const themeOptions = useMemo(
		() => ({
			typography,
		}),
		[]
	);
	const theme = createTheme(themeOptions);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
