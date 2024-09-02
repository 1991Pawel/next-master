import Image from "next/image";
import { getProductById, getProducts } from "../../../api/products";

type ProductsPageProps = {
	params: {
		productId: string;
	};
};

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
