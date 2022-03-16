import React from "react";

import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Accordion from "@mui/material/Accordion";

function CustomAccordion({ title, children }) {
	return (
		<Accordion>
			<AccordionSummary>{title}</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</Accordion>
	);
}

const components = {
	CustomAccordion: CustomAccordion,
};

export default components;
