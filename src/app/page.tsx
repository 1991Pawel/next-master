import { ProductList } from "../ui/organisms/ProductList";

import { getProducts } from "@/api/products";
export default async function Home() {
	const products = await getProducts();
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section>
				<ProductList products={products.slice(0, 4)} />
			</section>
		</main>
	);
}
