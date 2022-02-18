import React from "react";
import Page from "../components/Page";
import { Jumbotron, BookPostCards, Footer } from "../components/Home";

export default function Home() {
	return (
		<Page title="Book Club">
			<Jumbotron />
			<BookPostCards />
			<Footer />
		</Page>
	);
}
