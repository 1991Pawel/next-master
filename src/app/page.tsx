import { ProductList } from "../ui/organisms/ProductList";
// import {}

import { getProducts } from "@/api/products";
export default async function Home() {
	const productsData = await getProducts({ take: 4 });

	const products = productsData.products;
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section>
				<ProductList products={products} />
			</section>
		</main>
	);
}
