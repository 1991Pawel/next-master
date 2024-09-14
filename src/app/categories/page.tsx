import Link from "next/link";
import { getProductCategories } from "@/api/products";
export default async function ProductsPage() {
	const categories = await getProductCategories();
	return (
		<>
			<h2>Categories</h2>
			<div>
				{categories.map((category) => (
					<span key={category}>
						<Link href={`/categories/${category}/1`}>{category}</Link>{" "}
					</span>
				))}
			</div>
		</>
	);
}
