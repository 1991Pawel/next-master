import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByCollections } from "@/api/products";
export default async function ProductsPage({ params }: { params: { collection: string } }) {
	const { collection } = params;

	const products = await getProductsByCollections({
		collection,
	});

	if (!products) {
		return <p>No products found.</p>;
	}

	return (
		<>
			<h2>Collections {collection}</h2>
			<ProductList products={products} />
		</>
	);
}
