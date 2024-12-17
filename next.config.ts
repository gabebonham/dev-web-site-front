import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	staticPageGenerationTimeout: 15000,
	env: {
		BACKEND_URL:
			'https://dev-web-site-back-production.up.railway.app/api',
		BACKEND_URL_PURE:
			'https://dev-web-site-back-production.up.railway.app',
		JWT_KEY: 'grote',
	},
	async headers() {
		return [
			{
				// matching all API routes
				source: '/:path*',
				headers: [
					{
						key: 'Access-Control-Allow-Origin',
						value: '*',
					}, // replace this your actual origin
					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET,DELETE,PATCH,POST,PUT, OPTIONS',
					},
					{
						key: 'Access-Control-Allow-Headers',
						value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
					},
					{
						key: 'Access-Control-Allow-Credentials',
						value: 'true',
					},
				],
			},
		];
	},
};

export default nextConfig;
