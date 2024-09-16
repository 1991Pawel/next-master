import Link from "next/link";
import { getProductCategories } from "@/api/products";
export default async function ProductsPage() {
	const categories = await getProductCategories();
	return (
		<>
			<h2>Categories</h2>
		</>
	);
}
