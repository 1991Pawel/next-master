import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import { getProductById, getProducts } from "../../../api/products";

type ProductsPageProps = {
	params: {
		productId: string;
	};
};

export async function generateMetadata({
	params: { productId },
}: ProductsPageProps): Promise<Metadata> {
	const product = await getProductById(productId);
	return {
		title: product.name,
		description: product.category,
	};
}

export const generateStaticParams = async () => {
	const products = await getProducts();
	const productsId = products.map(({ id }) => ({ productId: id })).slice(-4);
	return productsId;
};

export default async function SingleProductPage({ params: { productId } }: ProductsPageProps) {
	const product = await getProductById(productId);

	return (
		<div>
			<h1>{product.name}</h1>
			<Image src={product.coverImage.src} alt={product.name} width={500} height={500} />
			<p>{product.price}</p>
		</div>
	);
}
