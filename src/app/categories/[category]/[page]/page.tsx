import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByCategories } from "@/api/products";
export default async function ProductsPage({
	params,
}: {
	params: { page: string; category: string };
}) {
	const { page, category } = params;

	const products = await getProductsByCategories({
		category: category.toLowerCase(),
	});

	return (
		<>
			<h2>
				{category} {page} <ProductList products={products} />
			</h2>
		</>
	);
}
