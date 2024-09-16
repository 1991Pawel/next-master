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
			<h1> PAGE: {page}</h1>
			<h2>
				<ProductList products={products} />
			</h2>
		</>
	);
}
