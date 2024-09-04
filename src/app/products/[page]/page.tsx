import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";

import { getProducts } from "@/api/products";

export default async function ProductsPage() {
	const currentPage = 1;
	const limit = 10;
	const offset = (currentPage - 1) * limit;

	const products = await getProducts({ limit, offset });
	const pagesNumber = 3;

	return (
		<>
			<ProductList products={products} />
			<Pagination pageNumber={pagesNumber} />
		</>
	);
}
