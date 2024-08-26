import { ProductListItem } from "../molecules/ProductListItem";
import { type ProductItemType } from "../types";

export const ProductList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{products.map((product) => (
				<ul key={product.id}>
					<ProductListItem data-testid="products-list" product={product} />
				</ul>
			))}
		</div>
	);
};
