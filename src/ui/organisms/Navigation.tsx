import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { getProductCategories, getProductsCollections } from "@/api/products";

export const Navigation = async () => {
	const categories = await getProductCategories();
	const collections = await getProductsCollections();

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
				{collections.map((collection) => (
					<li key={collection}>
						<ActiveLink href={`/collections/${collection}`}>{collection}</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
