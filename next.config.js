/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['avatars.githubusercontent.com'], // allow GitHub avatars
	},
	env: {
		EXPERIMENTATION_EXPERIMENTATION_CONFIG_ITEM_KEY: process.env.EXPERIMENTATION_EXPERIMENTATION_CONFIG_ITEM_KEY,
		EXPERIMENTATION_NEXT_PUBLIC_HYPERTUNE_TOKEN: process.env.EXPERIMENTATION_NEXT_PUBLIC_HYPERTUNE_TOKEN
	}
};

module.exports = nextConfig;