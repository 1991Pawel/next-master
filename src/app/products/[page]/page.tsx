import { ProductList } from "@/ui/organisms/ProductList";

import { getProducts } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";

export default async function ProductsPage({ params }: { params: { page: string } }) {
	const currentPage = Number(params.page) || 0;
	const productsPerPage = 4;
	const skip = currentPage !== 1 ? (currentPage - 1) * productsPerPage : 0;
	const take = productsPerPage;

	const productsData = await getProducts({
		skip,
		take,
	});

	const products = productsData.products;
	const totalProducts = productsData.total;

	const totalPages = Math.ceil(totalProducts / productsPerPage);

	return (
		<>
			<Pagination baseUrl={"/products"} totalPages={totalPages} currentPage={currentPage} />
			<ProductList products={products} />
		</>
	);
}
