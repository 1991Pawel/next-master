import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByCategories } from "@/api/products";
export default async function ProductsPage({
	params,
}: {
	params: { page: string; category: string };
}) {
	const { page, category } = params;

	const products = await getProductsByCategories({
		category: category,
	});

	if (!products) {
		return <p>No products found.</p>;
	}

	return (
		<>
			<h1> PAGE: {page}</h1>
			<ProductList products={products} />
		</>
	);
}
