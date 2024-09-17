import { type Route } from "next/types";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { getProductCategories } from "@/api/products";

export const Navigation = async () => {
	const categories = await getProductCategories();

	return (
		<nav className="bg-gray-200 p-4">
			<ul className="flex space-x-4">
				<li>
					<ActiveLink href="/">Home</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/products">All</ActiveLink>
				</li>

				{categories.map((category) => (
					<li key={category}>
						<ActiveLink href={`/categories/${category}/1`}>{category}</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
