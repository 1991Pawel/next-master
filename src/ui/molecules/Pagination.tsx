"use client";

export const Pagination = ({ pageNumber }: { pageNumber: number }) => {
	// Tworzymy tablicę o długości równej pageNumber i wypełniamy ją liczbami od 1 do pageNumber
	const pages = Array.from({ length: pageNumber }, (_, i) => i + 1);

	return (
		<nav>
			{pages.map((page) => (
				<button key={page}>{page}</button>
			))}
		</nav>
	);
};
