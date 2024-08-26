import { ProductListItem } from "../molecules/ProductListItem";
import { type ProductItemType } from "../types";

export const ProductList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{products.map((product) => (
				<li key={product.id}>
					<ProductListItem product={product} />
				</li>
			))}
		</ul>
	);
};
