import { ProductList } from "@/ui/organisms/ProductList";

import { getProducts } from "@/api/products";

export default async function ProductsPage({ params }: { params: { category: string } }) {
	const { category } = params;

	return (
		<>
			<div></div>
		</>
	);
}
