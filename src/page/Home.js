import { Grid } from "@mui/material";

import Page from "../components/Page";
import { Jumbotron, BookCard, Footer } from "../components/Home";

import BOOKS from "../_mocks/books";

export default function Home() {
	return (
		<Page title="Book Club">
			<Jumbotron />

			<Grid container spacing={2}>
				{BOOKS.map((book, index) => (
					<BookCard book={book} key={index} index={index} />
				))}
			</Grid>
			<Footer />
		</Page>
	);
}
