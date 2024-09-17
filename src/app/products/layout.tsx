import { Pagination } from "@/ui/molecules/Pagination";

import { getProducts } from "@/api/products";

export default async function ProductsPage({ children }: { children: React.ReactNode }) {
	const productsPerPage = 10;
	const products = await getProducts();
	const pageNumber = products.length / productsPerPage;

	return (
		<>
			<Pagination numOfPages={pageNumber} />
			{children}
		</>
	);
}
