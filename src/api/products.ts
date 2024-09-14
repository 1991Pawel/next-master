import {
	ProductsGetListDocument,
	GetProductCategoriesDocument,
	GetProductsByCategoriesDocument,
	type TypedDocumentString,
	type CategoryList,
	type Category,
} from "@/gql/graphql";
type GraphQLProductResponse<T> =
	| { data: T; errors?: undefined }
	| { data?: undefined; errors: { message: string }[] };

type Image = {
	url: string;
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

const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.NEXT_PUBLIC_GRAPHQL_API_URL) {
		throw new Error("No GraphQL API URL provided");
	}
	const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	const graphqlResponse = (await res.json()) as GraphQLProductResponse<TResult>;

	if (graphqlResponse.errors) {
		throw new Error(graphqlResponse.errors[0].message);
	}

	return graphqlResponse.data;
};

export const getProducts = async () => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	return graphqlResponse.products.data.map((p) => {
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

// export const getProductCategories = async (category: string) => {
// 	const res = await executeGraphql(GetProductCategoriesDocument, {});

// 	const categories = res.data.categories.data.map((c) => c.name);

// 	console.log(categories, "c");

// 	const categories = graphqlResponse.data.categories.data.map((c) => c.name);
// };

export const getProductCategories = async () => {
	const graphqlResponse = await executeGraphql(GetProductCategoriesDocument, {});

	return graphqlResponse.categories.data.map((c) => c.name);
};
export const getProductsByCategories = async ({ category }: { category: string }) => {
	const graphqlResponse = await executeGraphql(GetProductsByCategoriesDocument, {
		category,
	});

	return graphqlResponse.category?.products.map((product) => {
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
	});
};
