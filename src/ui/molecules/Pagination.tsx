"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

export const Pagination = ({ totalPages, baseUrl }: { totalPages: number; baseUrl: string }) => {
	const pageNumbers = Array.from({ length: totalPages }).map((_, i) => i + 1);

	return (
		<>
			<nav>
				<ul aria-label="pagination" className="mt-4 flex items-center justify-center gap-4">
					{pageNumbers.map((page) => (
						<li key={page}>
							<ActiveLink href={`${baseUrl}/${page}` as Route}>{page}</ActiveLink>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};
