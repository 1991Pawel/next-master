import {
	ProductsGetListDocument,
	GetProductCategoriesDocument,
	GetProductsByCategoriesDocument,
	GetProductsCollectionsDocument,
	type TypedDocumentString,
	type Product,
} from "@/gql/graphql";
// import apiMaper from "@/api/apiMaper";
type GraphQLProductResponse<T> =
	| { data: T; errors?: undefined }
	| { data?: undefined; errors: { message: string }[] };

type ProductGraphQLResponse = {
	product: Product;
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

type GetProductsVariables = {
	take?: number;
	skip?: number;
};

export const getProducts = async (variables?: GetProductsVariables) => {
	const take = variables?.take ?? 10;
	const skip = variables?.skip ?? 0;
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, { take, skip });

	const products = graphqlResponse.products.data.map((p) => {
		return {
			id: p.id,
			name: p.name,
			price: p.price,
			description: p.description,
			categories: p.categories,
			images: p.images,
		};
	});

	return {
		products,
		total: graphqlResponse.products.meta.total,
	};
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
		categories: product.categories,
		images: product.images,
	};
};

export const getProductCategories = async () => {
	const graphqlResponse = await executeGraphql(GetProductCategoriesDocument, {});

	return graphqlResponse.categories.data.map((c) => c.slug);
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
			categories: product.categories,
			images: product.images,
		};
	});
};

export const getProductsByCollections = async () => {
	const graphqlResponse = await executeGraphql(GetProductsCollectionsDocument, {});
	return graphqlResponse.collections.data.map((c) => c.slug);
};
