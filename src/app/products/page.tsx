import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";

import { getProducts } from "@/api/products";

export default async function ProductsPage() {
	const productsPerPage = 10;
	const products = await getProducts();

	return (
		<>
			<ProductList products={products.slice(0, productsPerPage)} />
		</>
	);
}
