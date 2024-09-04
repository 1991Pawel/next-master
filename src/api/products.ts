import { type ProductItemType } from "@/ui/types";
interface ProductResponseItem {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
}

type GetProductsParams = {
	limit?: number;
	offset?: number;
};

export const getProducts = async ({ limit = 100, offset = 0 }: GetProductsParams = {}) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${limit}&offset=${offset}`,
	);
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(productResponseItemToProductItemType);
	return products;
};

export const getProductById = async (id: ProductItemType["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);

	const productResponse = (await res.json()) as ProductResponseItem;
	const product = productResponseItemToProductItemType(productResponse);
	return product;
};

const productResponseItemToProductItemType = (product: ProductResponseItem): ProductItemType => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		coverImage: {
			src: product.image,
			alt: product.title,
		},
	};
};
