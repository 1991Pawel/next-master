import { ProductListItem } from "../molecules/ProductListItem";
import { type ProductItemType } from "../types";

export const ProductList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<div
			data-testid="products-list"
			className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{products.map((product) => (
				<span key={product.id}>
					<ProductListItem product={product} />
				</span>
			))}
		</div>
	);
};
