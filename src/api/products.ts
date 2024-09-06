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
	console.log(process.env.NEXT_PUBLIC_GRAPHQL_API_URL);

	const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
                query GetProduct($id: ID!) {
                    product(id: $id) {
					id
                        name
                        price
                        rating
					images {
      alt
      url
      width
      id
      height
    }
	    categories {
      name
      description
    }
                    }
                }
            `,
			variables: {
				id,
			},
		}),
	});

	const productResponse = (await res.json()) as ProductResponseItem;
	const product = productResponseItemToProductItemType2(productResponse.data.product);

	console.log(product, "p");
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
const productResponseItemToProductItemType2 = (product: ProductResponseItem): ProductItemType => {
	return {
		id: product?.id,
		name: product?.name,
		category: product?.categories[0].name,
		price: product?.price,
		coverImage: {
			src: product?.images[0].url,
		},
	};
};
