/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "query GetProduct($slug: String) {\n  product(where: {slug: $slug}) {\n    id\n    slug\n    description\n    longDescription\n    name\n    price\n    images {\n      url\n      height\n      width\n    }\n    reviews {\n      content\n      headline\n      id\n      name\n      rating\n    }\n    categories {\n      name\n      slug\n    }\n  }\n}": types.GetProductDocument,
    "query GetProducts($first: Int, $skip: Int) {\n  productsConnection(first: $first, skip: $skip) {\n    aggregate {\n      count\n    }\n    edges {\n      node {\n        slug\n        name\n        price\n        images(first: 1) {\n          url\n        }\n        reviews {\n          rating\n          id\n        }\n      }\n    }\n  }\n}": types.GetProductsDocument,
    "query GetProductsSlugs($first: Int) {\n  products(first: $first, skip: 0) {\n    slug\n  }\n}": types.GetProductsSlugsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProduct($slug: String) {\n  product(where: {slug: $slug}) {\n    id\n    slug\n    description\n    longDescription\n    name\n    price\n    images {\n      url\n      height\n      width\n    }\n    reviews {\n      content\n      headline\n      id\n      name\n      rating\n    }\n    categories {\n      name\n      slug\n    }\n  }\n}"): (typeof documents)["query GetProduct($slug: String) {\n  product(where: {slug: $slug}) {\n    id\n    slug\n    description\n    longDescription\n    name\n    price\n    images {\n      url\n      height\n      width\n    }\n    reviews {\n      content\n      headline\n      id\n      name\n      rating\n    }\n    categories {\n      name\n      slug\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProducts($first: Int, $skip: Int) {\n  productsConnection(first: $first, skip: $skip) {\n    aggregate {\n      count\n    }\n    edges {\n      node {\n        slug\n        name\n        price\n        images(first: 1) {\n          url\n        }\n        reviews {\n          rating\n          id\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetProducts($first: Int, $skip: Int) {\n  productsConnection(first: $first, skip: $skip) {\n    aggregate {\n      count\n    }\n    edges {\n      node {\n        slug\n        name\n        price\n        images(first: 1) {\n          url\n        }\n        reviews {\n          rating\n          id\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductsSlugs($first: Int) {\n  products(first: $first, skip: 0) {\n    slug\n  }\n}"): (typeof documents)["query GetProductsSlugs($first: Int) {\n  products(first: $first, skip: 0) {\n    slug\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;