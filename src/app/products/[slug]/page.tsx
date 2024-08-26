"use client";

type ProductsPageProps = {
	params: {
		slug: string;
	};
};

export default function ProductsPage({ params: { slug } }: ProductsPageProps) {
	return (
		<div>
			<p>product: {slug}</p>
		</div>
	);
}
