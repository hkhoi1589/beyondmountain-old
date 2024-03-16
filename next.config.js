/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone', // THIS IS IMPORTANT
	trailingSlash: true,
	distDir: 'dist',
	cleanDistDir: true,
	swcMinify: true,
	images: {
		// Nowhere to cache the images in Lambda (read only)
		unoptimized: true, // Next 12.3+, other "experimental -> images -> unoptimized"
	},
};

module.exports = nextConfig;
