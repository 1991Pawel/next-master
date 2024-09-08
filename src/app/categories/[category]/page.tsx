import { ProductList } from "@/ui/organisms/ProductList";

import { getProducts } from "@/api/products";

export default async function ProductsPage({ params }: { params: { category: string } }) {
	const { category } = params;
	const products = await getProducts();

	return (
		<>
			<h2>{category} Products</h2>
		</>
	);
}
