import * as React from "react";
import MuiLink, { LinkBaseProps } from "@mui/material/Link";
import { Link as GatsbyLink } from "gatsby";

interface CustomLinkType {
	ref: LinkBaseProps;
}

// const example = ({ props }: InterfaceName) => {};

const Link = React.forwardRef(function Link({ ref, ...props }: CustomLinkType) {
	return <MuiLink component={GatsbyLink} ref={ref} {...props} />;
});

export default Link;
