import Link from "next/link";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<div className="mb-4">
			<Link href={`/product/${product.id}`}>
				<article className="rounded-lg bg-white p-4 shadow-md">
					{product.images[0] && (
						<ProductCoverImage src={product.images[0].url} alt={product.name} />
					)}

					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</div>
	);
};
