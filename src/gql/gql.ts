/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  price\n  categories {\n    name\n    slug\n  }\n  images {\n    url\n  }\n}": types.ProductListItemFragmentDoc,
    "query getProductCategories {\n  categories {\n    data {\n      name\n      slug\n    }\n    meta {\n      count\n    }\n  }\n}": types.GetProductCategoriesDocument,
    "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsGetListDocument,
    "query getProductsByCategories($category: String!) {\n  category(slug: $category) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.GetProductsByCategoriesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  price\n  categories {\n    name\n    slug\n  }\n  images {\n    url\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getProductCategories {\n  categories {\n    data {\n      name\n      slug\n    }\n    meta {\n      count\n    }\n  }\n}"): typeof import('./graphql').GetProductCategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getProductsByCategories($category: String!) {\n  category(slug: $category) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').GetProductsByCategoriesDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
