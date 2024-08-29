"use client";

type ProductsPageProps = {
	params: {
		productId: string;
	};
};

export default function SingleProductPage({ params: { productId } }: ProductsPageProps) {
	return (
		<div>
			<p>product: {productId}</p>
		</div>
	);
}
