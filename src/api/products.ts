type GraphQLProductResponse<T> =
	| { data: T; errors?: undefined }
	| { data?: undefined; errors: { message: string }[] };

type Image = {
	url: string;
};

type ProductsGraphQLResponse = {
	products: {
		data: {
			id: string;
			name: string;
			price: number;
			description: string;
			images: Image[];
		}[];
	};
};
type ProductGraphQLResponse = {
	product: {
		id: string;
		name: string;
		price: number;
		description: string;
		images: Image[];
	};
};

export const getProducts = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			query: ` query getProducts { products(take: 10) { data { id name description price images { url } } } } `,
		}),
	});
	const graphqlResponse = (await res.json()) as GraphQLProductResponse<ProductsGraphQLResponse>;
	if (graphqlResponse.errors) {
		throw new Error(graphqlResponse.errors[0].message);
	}

	return graphqlResponse.data.products.data.map((p) => {
		return {
			id: p.id,
			name: p.name,
			price: p.price,
			description: p.description,
			coverImage: {
				src: p.images[0].url,
				alt: p.name,
			},
		};
	});

	return [];
};

export const getProductById = async (id: ProductGraphQLResponse["product"]["id"]) => {
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

	const graphqlResponse = (await res.json()) as GraphQLProductResponse<ProductGraphQLResponse>;

	if (graphqlResponse.errors) {
		throw new Error(graphqlResponse.errors[0].message);
	}
	const product = graphqlResponse.data.product;

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
