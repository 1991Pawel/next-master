import { ProductList } from "@/ui/organisms/ProductList";

import { getProducts } from "@/api/products";

export default async function ProductsPage({ params }: { params: { page: number } }) {
	const page = params.page;
	const products = await getProducts({ limit: 10, offset: page * 10 });

	return (
		<>
			<ProductList products={products} />
		</>
	);
}
