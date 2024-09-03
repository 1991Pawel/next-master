import { ProductList } from "../ui/organisms/ProductList";
import { type ProductItemType } from "../types";
import { getProducts } from "@/api/products";
export default async function Home() {
	const products = await getProducts();
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section>
				<ProductList products={products} />
			</section>
		</main>
	);
}
