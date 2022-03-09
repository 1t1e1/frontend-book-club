import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function Jumbotron() {
	return (
		<StaticImage
			alt="Home page cover image"
			src="../statics/homepageCover.jpg"
		/>
	);
}
