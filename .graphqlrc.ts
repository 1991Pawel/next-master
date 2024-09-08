import type { CodegenConfig } from "@graphql-codegen/cli";

export const config: CodegenConfig = {
	overwrite: true,
	schema: "https://graphql.hyperfunctor.com/graphql",
	documents: "src/graphql/*.graphql",
	ignoreNoDocuments: true,
	// presetConfig: {
	// 	fragmentMasking: { unmaskFunctions: ["getFrag"] },
	// },
	generates: {
		"src/gql/": {
			preset: "client",
			config: {
				defaultTypeScalar: "unknown",
				useTypeIMports: true,
				skipTypename: true,
				documentMode: "string",
			},
			plugins: [],
		},
	},
};

// export default config;
