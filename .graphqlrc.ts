import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "https://graphql.hyperfunctor.com/graphql",
	documents: "src/graphql/*.graphql",
	ignoreNoDocuments: true,
	generates: {
		"src/gql/": {
			preset: "client",
			config: {
				defaultTypeScalar: "unknown",
				useTypeImports: true, // Poprawiono literówkę z "useTypeIMports" na "useTypeImports"
				skipTypename: true,
				documentMode: "string",
				enumsAsTypes: true,
			},
			plugins: [],
		},
	},
};

export default config;
