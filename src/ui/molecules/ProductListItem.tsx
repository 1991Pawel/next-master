import Link from "next/link";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type ProductItemType } from "../types";

type ProductListItemProos = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductListItemProos) => {
	return (
		<div className="mb-4">
			<Link href={`/products/${product.id}`}>
				<article className="rounded-lg bg-white p-4 shadow-md">
					<ProductCoverImage {...product.coverImage} />
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</div>
	);
};
