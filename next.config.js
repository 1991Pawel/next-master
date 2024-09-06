/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["naszsklep-api.vercel.app", "static-ourstore.hyperfunctor.com"],
	},
	experimental: {
		typedRoutes: true,
	},
};

module.exports = nextConfig;
