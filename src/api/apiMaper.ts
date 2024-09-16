import { type Product } from "@/gql/graphql";
export const maper = ({ product }: { product: Product }) => {
	return {
		id: product.id,
		name: product.name,
		price: product.price,
		description: product.description,
		coverImage: {
			src: product.images[0].url,
			alt: product.name,
		},
		images: product.images,
	};
};
