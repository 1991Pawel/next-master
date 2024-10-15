import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByCategories } from "@/api/products";

export default async function ProductsPage({
	params,
}: {
	params: { page: string; category: string };
}) {
	const { category } = params;

	const products = await getProductsByCategories({
		category: category,
	});

	if (!products) {
		return <p>No products found.</p>;
	}

	return (
		<>
			<ProductList products={products} />
		</>
	);
}
