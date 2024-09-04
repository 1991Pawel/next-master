"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

export const Pagination = ({ numOfPages }: { numOfPages: number }) => {
	const currentpathname = usePathname();
	const currentNumberPage = currentpathname?.includes("/") ? currentpathname.split("/").pop() : 1;

	return (
		<>
			<nav>
				<ul aria-label="pagination" className="mt-4 flex items-center justify-center gap-4">
					<Link
						href={`/products/${Number(currentNumberPage) > 1 ? Number(currentNumberPage) - 1 : Number(currentNumberPage)}`}
					>
						{"<"}
					</Link>
					{numOfPages === 1 ? (
						<li>
							<ActiveLink href={`/products/${1}` as Route}>1</ActiveLink>
						</li>
					) : (
						Array.from({ length: numOfPages }, (_, i) => i + 1).map((page) => {
							return (
								<li key={page}>
									<ActiveLink href={`/products/${page}` as Route}>{page}</ActiveLink>
								</li>
							);
						})
					)}
					<Link
						href={`/products/${numOfPages > Number(currentNumberPage) ? Number(currentNumberPage) + 1 : Number(currentNumberPage)}`}
					>
						{">"}
					</Link>
				</ul>
			</nav>
		</>
	);
};
